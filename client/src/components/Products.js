import React, { useContext, useEffect, useCallback, useState } from 'react'
import axios from 'axios'
import {
    Thumbnail,
    Checkbox,
    TextStyle,
    Button,
    Modal,
    TextContainer,
    TextField
} from '@shopify/polaris'
import QrScanner from 'react-qr-scanner'
import { Table, Header, Icon } from 'semantic-ui-react'
import { useFetchProducts, useBranchEntity } from '../core/hooks'
import { toCurrency } from '../utils/helper'
import { Context } from '../store/Store'
import { GET_PRODUCTS, SET_CUSTOMER_ID, SET_CHOSEN_PRODUCTS } from '../store/actionTypes'
import config from '../aws-exports'

function App({ history, match }) {
    const { avantaState, dispatch } = useContext(Context)
    const [rowId, setRowId] = useState([])
    const [active, setActive] = useState(false)
    const [searchValue, setSearchValue] = useState(null)
    const handleSearchInput = useCallback((newValue) => setSearchValue(newValue), [])
    const [state, setState] = useState({
        products: []
    })
    const [branchInfo, setBranchInfo] = useState('')

    const { data: productsData, refetch: fetchProducts } = useFetchProducts()
    const { data: branchData, refetch: getBranch } = useBranchEntity(match.params.adminId)

    const handleChange = useCallback(() => setActive(!active), [active])
    const handleScan = (data) => {
        dispatch({ type: SET_CUSTOMER_ID, payload: data })
    }
    const handleError = (error) => {
        console.log(error)
    }

    if (avantaState.customerId !== null) {
        setTimeout(() => {
            dispatch({ type: SET_CHOSEN_PRODUCTS, payload: state.products })
            history.push(`/customer/${match.params.adminId}/${branchInfo.id}`)
        }, 500)
    }

    useEffect(() => {
        fetchProducts()
        getBranch()
        // eslint-disable-next-line
    }, [fetchProducts, match])

    useEffect(() => {
        if (!branchData) {
            return
        }
        setBranchInfo(branchData.data.branchByAdminId.items[0])
    }, [branchData])

    useEffect(() => {
        if (!productsData) {
            return
        }
        dispatch({ type: GET_PRODUCTS, payload: productsData.data })
    }, [productsData])

    const previewStyle = {
        height: 500,
        width: '100%'
    }

    const { products } = avantaState
    const branchProductsId = branchInfo
        ? branchInfo.branchProducts.items.map((product) => product.productId)
        : ''

    return (
        <div className="App">
            <TextField
                label="Search Product"
                value={searchValue}
                onChange={handleSearchInput}
                prefix={<Icon name="search" />}
            />
            <Table celled striped selectable>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Products</Table.HeaderCell>
                        <Table.HeaderCell>Description</Table.HeaderCell>
                        <Table.HeaderCell textAlign="center">Price</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {products &&
                        products.data.products.edges
                            .filter((product) => {
                                if (!branchProductsId) {
                                    // eslint-disable-next-line
                                    return
                                }
                                return branchProductsId.includes(product.node.id)
                            })
                            // eslint-disable-next-line
                            .filter((product) => {
                                if (searchValue == null) {
                                    return product
                                } else if (
                                    product.node.title
                                        .toLowerCase()
                                        .includes(searchValue.toLowerCase())
                                ) {
                                    return product
                                }
                            })
                            .map((product) => (
                                <Table.Row
                                    key={product.node.id}
                                    onClick={() => {
                                        if (rowId.includes(product.node.id)) {
                                            setRowId(rowId.filter((id) => id !== product.node.id))
                                            setState({
                                                products: state.products.filter(
                                                    (filteredProduct) =>
                                                        filteredProduct.node.id !== product.node.id
                                                )
                                            })
                                        } else {
                                            setRowId([...rowId, product.node.id])
                                            setState({ products: [...state.products, product] })
                                        }
                                    }}>
                                    <Table.Cell>
                                        <Header as="h4" image className="product-header">
                                            <Checkbox
                                                checked={rowId.includes(product.node.id) && true}
                                            />
                                            <Thumbnail
                                                source={
                                                    product.node.images.edges[0] &&
                                                    product.node.images.edges[0].node.originalSrc
                                                }
                                                size="small"
                                                alt=""
                                            />
                                            <Header.Content>{product.node.title}</Header.Content>
                                        </Header>
                                    </Table.Cell>
                                    <Table.Cell>
                                        <TextStyle variation="subdued">
                                            {product.node.description}
                                        </TextStyle>
                                    </Table.Cell>
                                    <Table.Cell textAlign="center">
                                        <TextStyle variation="subdued">
                                            {product.node.variants.edges[0] &&
                                                toCurrency(
                                                    product.node.variants.edges[0].node.price
                                                )}
                                        </TextStyle>
                                    </Table.Cell>
                                </Table.Row>
                            ))}
                </Table.Body>
                <Table.Footer fullWidth>
                    <Table.Row>
                        <Table.HeaderCell />
                        <Table.HeaderCell />
                        <Table.HeaderCell>
                            <Button
                                disabled={state.products.length === 0}
                                primary
                                onClick={handleChange}>
                                <Icon name="expand" /> Scan QR
                            </Button>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
            <div>
                <Modal open={active} onClose={handleChange} title="Scan QR Code">
                    <Modal.Section>
                        <TextContainer>
                            <QrScanner
                                style={previewStyle}
                                onError={handleError}
                                onScan={handleScan}
                            />
                        </TextContainer>
                    </Modal.Section>
                </Modal>
            </div>
        </div>
    )
}

export default App
