const { createLogger, format, transports } = require('winston')

const logger = {
    promise:createLogger({
        level: "info",
        format: format.combine(format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), format.json()),
        transports: [new transports.File({ filename: './logging/promise-log.log' })]
    }),
    linear: createLogger({
     level:"info",
     format: format.combine(format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), format.json()),
     transports: [new transports.File({filename:'./logging/linearSearch-log.log'})]
    })
}
module.exports =  logger 
