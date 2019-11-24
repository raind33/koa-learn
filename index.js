const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()
const router = new Router()

router.get('/', async (ctx, next) => {
  ctx.body = {
    err: 0
  }
})

app.use(router.routes(), router.allowedMethods())
app.listen(9000)
