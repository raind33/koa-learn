const router = require('koa-router')()

const a = require('../api/a')
router.get('/a', a)

module.exports = router
