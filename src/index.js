import path from 'path'
import Koa from 'koa'
import koaBody from 'koa-body'
import cors from '@koa/cors'
import koaJson from 'koa-json'
import helmet from 'koa-helmet'
import koaStatic from 'koa-static'

import router from './routes'

const app = new Koa()


app.use(koaStatic(path.join(__dirname, '../public')))
app.use(helmet())
app.use(koaBody())
app.use(cors())
app.use(koaJson())

app.use(router())
app.listen(9000)
