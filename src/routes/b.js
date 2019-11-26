const router = require('koa-router')()

const b = require('../api/b')
router.get('/b', b)

module.exports = router
