import path from 'path'
import Koa from 'koa'
import koaBody from 'koa-body'
import cors from '@koa/cors'
import koaJson from 'koa-json'
import helmet from 'koa-helmet'
import koaStatic from 'koa-static'
import compose from 'koa-compose'
import compress from 'koa-compress'

import router from './routes'

const app = new Koa()
const isDev = (process.env.NODE_ENV === 'prod' || process.env.NODE_ENV === 'production') ? false : true
const middleware = compose([
  koaBody(),
  koaStatic(path.join(__dirname, '../public')),
  cors(),
  koaJson(),
  helmet()
])

// 生产环境压缩中间件
if (!isDev) {
  app.use(compress(middleware))
}

app.use(middleware)
app.use(router())

app.listen(9000)
