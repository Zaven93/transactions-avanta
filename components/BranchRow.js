import React, { useState, useCallback, useEffect } from "react"
import { Thumbnail, Checkbox, TextStyle, TextField } from "@shopify/polaris"
import { Table, Header, Icon } from "semantic-ui-react"
import { toCurrency } from "../utils/helper"

const BranchRow = ({ product, state, setState, branchInfo, rowId, setRowId }) => {
  const [fetchedProduct, setFetchedProduct] = useState({
    description: product.node.description,
    id: product.node.id,
    image: product.node.images.edges[0] ? product.node.images.edges[0].node.originalSrc : "",
    tags: product.node.tags,
    title: product.node.title,
    variants: {
      id: product.node.variants.edges[0].node.id,
      price: product.node.variants.edges[0].node.price,
    },
  })

  const [searchValue, setSearchValue] = useState(null)
  const [bonus, setBonus] = useState("")
  const handleSearchInput = useCallback((newValue) => setSearchValue(newValue), [])

  const handleBonus = useCallback((value) => {
    setBonus(value)
    fetchedProduct.tags = [value]
    setFetchedProduct(fetchedProduct)
  }, [])

  const compareProduct = () => {
    const comparedProduct = branchInfo.branchProducts.items.filter(
      (branchProduct) => branchProduct.productId === fetchedProduct.id
    )

    if (!comparedProduct || comparedProduct === undefined) {
      return
    }

    setBonus(comparedProduct[0] ? comparedProduct[0].tags[0] : "")

    return
  }

  useEffect(() => {
    console.log(
      "Row id from useEffect",
      branchInfo.branchProducts.items
        .map((item) => item.productId)
        .filter((productId) => productId === fetchedProduct.id)[0]
    )

    compareProduct()
  }, [product, branchInfo])

  return (
    <Table.Row key={fetchedProduct.id}>
      <Table.Cell>
        <Header as="h4" image className="product-header">
          <Checkbox
            checked={rowId.includes(fetchedProduct.id) && true}
            onChange={() => {
              if (rowId.includes(fetchedProduct.id)) {
                setRowId(rowId.filter((id) => id !== fetchedProduct.id))
                setState({
                  products: state.products.filter(
                    (filteredProduct) => filteredProduct.id !== fetchedProduct.id
                  ),
                })
              } else {
                setRowId([...rowId, fetchedProduct.id])
                setState({
                  ...state,
                  products: [...state.products, fetchedProduct],
                })
              }
            }}
          />
          <Thumbnail source={fetchedProduct.image} size="small" alt="" />
          <Header.Content>{fetchedProduct.title}</Header.Content>
        </Header>
      </Table.Cell>
      <Table.Cell textAlign="center">
        <TextStyle variation="subdued">
          {fetchedProduct.variants && toCurrency(fetchedProduct.variants.price)}
        </TextStyle>
      </Table.Cell>
      <Table.Cell>
        <TextField
          id="percentage-input"
          placeholder="Bonus Percentage"
          value={bonus}
          onChange={handleBonus}
          prefix={<Icon name="percent" />}
          disabled={!rowId.includes(fetchedProduct.id)}
        />
      </Table.Cell>
    </Table.Row>
  )
}

export default BranchRow
