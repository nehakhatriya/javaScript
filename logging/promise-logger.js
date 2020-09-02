const { createLogger, format, transports}= require('winston')

const logger= createLogger({
    level: "info",
    format: format.combine(format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss'}),format.json()),
    transports:[ new transports.File({filename:'./logging/promise-log.log'})]
})
module.exports= logger
