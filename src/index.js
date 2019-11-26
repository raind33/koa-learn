const path = require('path')
const Koa = require('koa')
const koaBody = require('koa-body')
const cors = require('@koa/cors')
const koaJson = require('koa-json')
const helmet = require('koa-helmet')
const static = require('koa-static')

const app = new Koa()

const router = require('./routes/index')

app.use(static(path.join(__dirname, '../public')))
app.use(helmet())
app.use(koaBody())
app.use(cors())
app.use(koaJson())

app.use(router())
app.listen(9000)
console.log(232)
