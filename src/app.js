const express = require('express')
const cors = require('cors')
const config = require("config")
const logger = require("./logging/logger")
const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

const account = require('./routes/account')
app.use('/account', account)

app.listen(config.get("Node.server.port"), (err) => {
    if (err) throw err
    console.log(`Server is running on ${config.get("Node.server.port")}`)
    logger.info(`Server is running on port ${config.get("Node.server.port")}`)
})

module.exports = app