const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

const account = require('./routes/account')
app.use('/account', account)

app.listen(process.env.SERVER_PORT || 3000, (err) => {
    if (err) throw err
    console.log(`Server is running on http://127.0.0.1:3000`)
})

module.exports = app