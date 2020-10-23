import React, { useState, useCallback, useEffect } from "react"
import { v4 as uuidv4 } from "uuid"
import { API, graphqlOperation } from "aws-amplify"
import { useQuery } from "@apollo/client"
import { Modal } from "@shopify/polaris"
import { Table } from "semantic-ui-react"
import { useBranchEntity } from "../core/hooks"
import config from "../aws-exports"
import BranchRow from "./BranchRow"
import { listProducts, getBranchById } from "../graphql/queries"
import {
  createBranchProduct,
  productUpdate,
  updateBranchProduct,
  deleteBranchProduct,
} from "../graphql/mutation"
import {
  onCreateBranchProduct,
  onUpdateBranchProduct,
  onDeleteBranchProduct,
} from "../graphql/subscriptions"

API.configure(config)

const ProductsList = ({ active, handleChange, branchId }) => {
  const { loading, error, data } = useQuery(listProducts)
  const [branchProductSubscription, setBranchProductSubscription] = useState("")
  const [rowId, setRowId] = useState([])
  const [state, setState] = useState({
    products: [],
  })
  const [branchInfo, setBranchInfo] = useState("")

  const { data: branchData, refetch: getBranch } = useBranchEntity(branchId)

  useEffect(() => {
    getBranch()

    const createListener = API.graphql(graphqlOperation(onCreateBranchProduct)).subscribe({
      next: (createdBranchProduct) => setBranchProductSubscription(createdBranchProduct),
    })
    const updateListener = API.graphql(graphqlOperation(onUpdateBranchProduct)).subscribe({
      next: (updatedBranchProduct) => setBranchProductSubscription(updatedBranchProduct),
    })
    const deleteListener = API.graphql(graphqlOperation(onDeleteBranchProduct)).subscribe({
      next: (deletedBranchProduct) => setBranchProductSubscription(deletedBranchProduct),
    })

    return () => {
      createListener.unsubscribe()
      updateListener.unsubscribe()
      deleteListener.unsubscribe()
    }
  }, [branchId, branchProductSubscription])

  useEffect(() => {
    if (!branchData) {
      return
    }
    setBranchInfo(branchData.data.getBranch)
    setRowId([...branchData.data.getBranch.branchProducts.items.map((item) => item.productId)])
    setState({
      products: [
        ...branchData.data.getBranch.branchProducts.items.map((product) => ({
          id: product.productId,
        })),
      ],
    })
  }, [branchData])

  if (loading) {
    return <div>Loading products...</div>
  }

  if (error) {
    return <div>Some error occured</div>
  }

  const deleteProductsFromBranch = () => {
    const productsToDeleteFromBranch = branchInfo.branchProducts.items.filter(
      (branchProduct) =>
        !state.products.map((product) => product.id).includes(branchProduct.productId)
    )

    Promise.all(
      productsToDeleteFromBranch.map((deleteProduct) => {
        API.graphql(graphqlOperation(deleteBranchProduct, { input: { id: deleteProduct.id } }))
      })
    ).catch((err) => console.log(err))

    return
  }

  const addProductsToBranch = () => {
    Promise.all(
      state.products.map((product) => {
        const updatedProduct = branchInfo.branchProducts.items.filter(
          (branchProduct) => branchProduct.productId === product.id
        )[0]
        if (updatedProduct) {
          API.graphql(
            graphqlOperation(updateBranchProduct, {
              input: {
                id: updatedProduct.id,
                tags: product.tags,
              },
            })
          )
        } else {
          API.graphql(
            graphqlOperation(createBranchProduct, {
              input: {
                id: uuidv4(),
                branchId: branchId,
                productId: product.id,
                tags: product.tags,
              },
            })
          )
        }
      })
    ).catch((err) => console.log(err))

    return
  }

  return (
    <Modal
      open={active}
      onClose={() => handleChange()}
      title="Choose products"
      primaryAction={{
        content: "Save changes",
        onAction: () => {
          addProductsToBranch()
          deleteProductsFromBranch()
          handleChange()
        },
      }}>
      <Modal.Section>
        <Table celled striped selectable>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Products</Table.HeaderCell>
              <Table.HeaderCell textAlign="center">Price</Table.HeaderCell>
              <Table.HeaderCell>Bonus Percentage</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {data &&
              branchInfo &&
              data.products.edges.map((product) => (
                <BranchRow
                  rowId={rowId}
                  setRowId={setRowId}
                  branchInfo={branchInfo}
                  branchId={branchId}
                  product={product}
                  state={state}
                  setState={setState}
                />
              ))}
          </Table.Body>
          <Table.Footer fullWidth>
            <Table.Row></Table.Row>
          </Table.Footer>
        </Table>
      </Modal.Section>
    </Modal>
  )
}

export default ProductsList
