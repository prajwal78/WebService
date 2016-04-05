var bunyan = require('bunyan');
var bformat = require('bunyan-format');
var formatOut = bformat({
    outputMode: 'short'
});

var logger = bunyan.createLogger({
    name: 'Assignment API',
    serializers: bunyan.stdSerializers,

    //******** Uncomment this below streams section for the info log / file logger format
    streams: [{
            level: 'info',
            stream: formatOut
        },
        // {
        //     level: 'debug',
        //     path: './logs/debug.log' // log ERROR and above to a file
        // }, {
        //     level: 'error',
        //     path: './logs/error1.log' // log ERROR and above to a file
        // }, 
        {
            level: 'error',
            stream: formatOut
        }
    ]
});
module.exports = logger;