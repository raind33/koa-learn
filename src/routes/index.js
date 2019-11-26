const combineRoute = require('koa-combine-routers')

const aRouter = require('./a')
const bRouter = require('./b')

module.exports = combineRoute(aRouter, bRouter)
