const express = require('express')

module.exports = {
    getAccount: (req, res) => {
        const account = {
            "id": 14327,
            "Name": "Jerry",
            "Role": "Architect"
        }

        return res.status(200).json({ account: account })
    }
}