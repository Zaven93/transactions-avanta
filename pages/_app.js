import App from 'next/app'
import Head from 'next/head'
import 'semantic-ui-css/semantic.min.css'
import { AppProvider } from '@shopify/polaris'
import { Provider } from '@shopify/app-bridge-react'
import '@shopify/polaris/dist/styles.css'
import translations from '@shopify/polaris/locales/en.json'
import Cookies from 'js-cookie'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { createHttpLink } from 'apollo-link-http'
import '../styles/style.css'

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: createHttpLink({
        credentials: 'include'
    })
})

class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props
        const config = {
            apiKey: '3b01063bac3031d13101100ef3e44fd5',
            shopOrigin: Cookies.get('shopOrigin'),
            forceRedirect: false
        }
        return (
            <React.Fragment>
                <Head>
                    <title>Sample App</title>
                    <meta charSet="utf-8" />
                </Head>
                <Provider config={config}>
                    <AppProvider i18n={translations}>
                        <ApolloProvider client={client}>
                            <Component {...pageProps} />
                        </ApolloProvider>
                    </AppProvider>
                </Provider>
            </React.Fragment>
        )
    }
}

export default MyApp
