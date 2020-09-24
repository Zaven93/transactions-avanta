require('isomorphic-fetch')
const dotenv = require('dotenv')
const Koa = require('koa')
const next = require('next')
const { default: createShopifyAuth } = require('@shopify/koa-shopify-auth')
const { verifyRequest } = require('@shopify/koa-shopify-auth')
const session = require('koa-session')
const cors = require('@koa/cors')

dotenv.config()
const { default: graphQLProxy } = require('@shopify/koa-shopify-graphql-proxy')
const { ApiVersion } = require('@shopify/koa-shopify-graphql-proxy')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const { SHOPIFY_API_SECRET_KEY, SHOPIFY_API_KEY } = process.env

app.prepare().then(() => {
    const server = new Koa()
    server.use(session({ secure: true, sameSite: 'none' }, server))
    server.keys = [SHOPIFY_API_SECRET_KEY]
    server.use(
        createShopifyAuth({
            apiKey: '3b01063bac3031d13101100ef3e44fd5',
            secret: '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',
            scopes: [
                'read_products',
                'write_products',
                'read_orders',
                'write_orders',
                'read_draft_orders',
                'write_draft_orders'
            ],
            afterAuth(ctx) {
                const { shop, accessToken } = ctx.session
                ctx.cookies.set('shopOrigin', shop, {
                    httpOnly: false,
                    secure: true,
                    sameSite: 'none'
                })
                ctx.redirect('/')
            }
        })
    )

    server.use(graphQLProxy({ version: ApiVersion.October19 }))
    server.use(verifyRequest())
    server.use(async (ctx) => {
        await handle(ctx.req, ctx.res)
        ctx.respond = false
        ctx.res.statusCode = 200
        return
    })

    server.listen(port, () => {
        console.log(`> Ready on http://localhost:${port}`)
    })
})
