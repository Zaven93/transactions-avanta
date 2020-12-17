import App from "next/app"
import Head from "next/head"
import "semantic-ui-css/semantic.min.css"
import { AppProvider } from "@shopify/polaris"
import { Provider } from "@shopify/app-bridge-react"
import { ReactQueryCacheProvider, QueryCache } from "react-query"
import "@shopify/polaris/dist/styles.css"
import translations from "@shopify/polaris/locales/en.json"
import Cookies from "js-cookie"
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client"
import { createHttpLink } from "apollo-link-http"
import "../styles/style.css"

import { Amplify } from "aws-amplify"
import config from "../aws-exports"

Amplify.configure({ ...config, ssr: true })

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: createHttpLink({
    credentials: "include",
  }),
})

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    const config = {
      apiKey: "cb7879ce44f538b136e4da86bc6f612c",
      shopOrigin: Cookies.get("shopOrigin"),
      forceRedirect: true,
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
              <ReactQueryCacheProvider queryCache={new QueryCache()}>
                <Component {...pageProps} />
              </ReactQueryCacheProvider>
            </ApolloProvider>
          </AppProvider>
        </Provider>
      </React.Fragment>
    )
  }
}

export default MyApp
