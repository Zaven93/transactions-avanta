// const axios = require('axios')
// const CryptoJS = require('crypto-js')
// const cookie = require('cookie')
// const nonce = require('nonce')()
// const querystring = require('query-string')

// const shopifyApiPublicKey = '6a2c26362810a70d73c835020ffe23a9'
// const shopifyApiSecretKey = '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'
// const scopes =
//     'write_products, read_products, read_customers, write_customers, read_draft_orders, write_draft_orders, read_orders, write_orders'
// const appUrl = 'https://rrw0uo137l.execute-api.us-east-1.amazonaws.com/dev'

// const buildRedirectUri = () => `${appUrl}/shopify/callback`

// const buildInstallUrl = (shop, state, redirectUri) =>
//     `https://${shop}/admin/oauth/authorize?client_id=${shopifyApiPublicKey}&scope=${scopes}&state=${state}&redirect_uri=${redirectUri}`

// const buildAccessTokenRequestUrl = (shop) => `https://${shop}/admin/oauth/access_token`

// const buildShopDataRequestUrl = (shop) => `https://${shop}/admin/shop.json`

// const generateEncryptedHash = (privateKey, params) => {
//     const key = CryptoJS.enc.Utf8.parse(privateKey)
//     const Params = CryptoJS.enc.Utf8.parse(params)
//     const hmac = CryptoJS.enc.Hex.stringify(CryptoJS.HmacSHA256(Params, key))

//     return hmac
// }

// const fetchAccessToken = async (shop, data) =>
//     await axios(buildAccessTokenRequestUrl(shop), {
//         method: 'POST',
//         data
//     })

// const fetchShopData = async (shop, accessToken) =>
//     await axios(buildShopDataRequestUrl(shop), {
//         method: 'GET',
//         headers: {
//             'X-Shopify-Access-Token': accessToken
//         }
//     })

// module.exports = {
//     shopify: (req, res) => {
//         const shop = req.query.shop

//         if (!shop) {
//             return res.status(400).send('no shop')
//         }

//         const state = nonce()

//         const installShopUrl = buildInstallUrl(shop, state, buildRedirectUri())

//         res.cookie('state', state) // should be encrypted in production
//         res.redirect(installShopUrl)
//     },

//     shopifyCallback: async (req, res) => {
//         const { shop, code, state } = req.query
//         const stateCookie = cookie.parse(req.headers.cookie).state

//         if (state !== stateCookie) {
//             return res.status(403).send('Cannot be verified')
//         }

//         const { hmac, ...params } = req.query
//         const queryParams = querystring.stringify(params)
//         const hash = generateEncryptedHash(shopifyApiSecretKey, queryParams)

//         if (hash !== hmac) {
//             return res.status(400).send('HMAC validation failed')
//         }

//         try {
//             const data = {
//                 client_id: shopifyApiPublicKey,
//                 client_secret: shopifyApiSecretKey,
//                 code
//             }
//             const tokenResponse = await fetchAccessToken(shop, data)

//             const { access_token } = tokenResponse.data

//             axios.defaults.headers.common['X-Shopify-Access-Token'] = access_token

//             const shopData = await fetchShopData(shop, access_token)
//             res.send(shopData.data.shop)
//         } catch (err) {
//             console.log(err)
//             res.status(500).send('something went wrong')
//         }
//     }
// }
