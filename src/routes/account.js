const express = require('express')
const router = express.Router()

const menuService = require('../services/account.service')

router.get('/', menuService.getAccount)

module.exports = router