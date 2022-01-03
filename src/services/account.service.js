const express = require('express')
const logger = require("../logging/logger")

module.exports = {
    getAccount: (req, res) => {
        const account = {
            "id": 14327,
            "Name": "Jerry",
            "Role": "Architect"
        }

        logger.info(`Account:  ${ account }`)
        return res.status(200).json({ account: account })
    }
}