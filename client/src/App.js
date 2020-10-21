import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import Products from './components/Products'
import Customer from './components/Customer'
import { Store } from './store/Store'

function App() {
    return (
        <Store>
            <Router>
                <Switch>
                    <Route exact path="/transactions/:adminId" component={Products} />
                    <Route exact path="/customer/:adminId/:branchId" component={Customer} />
                    <Route
                        exact
                        path="/orders"
                        render={() =>
                            (window.location =
                                'https://transactions-avanta.myshopify.com/admin/orders?selectedView=all')
                        }
                    />
                </Switch>
            </Router>
        </Store>
    )
}

export default App
