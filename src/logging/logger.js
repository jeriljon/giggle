const config = require("config")
const winston = require("winston")

const options = config.get("Logger")

const logger = winston.createLogger({
    levels: winston.config.npm.levels,
    transports: [
        new winston.transports.Console(options.Console)
    ], exitOnError: false
})