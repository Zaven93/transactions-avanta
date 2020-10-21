import React from 'react'
import ReactDOM from 'react-dom'
import '@shopify/polaris/dist/styles.css'
import translations from '@shopify/polaris/locales/en.json'
import { AppProvider } from '@shopify/polaris'
import 'semantic-ui-css/semantic.min.css'
import './index.css'
import App from './App'

ReactDOM.render(
    <AppProvider i18n={translations}>
        <App />
    </AppProvider>,
    document.getElementById('root')
)
