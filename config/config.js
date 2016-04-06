var path = require('path');
var __dirname = ".",
    rootpath = path.normalize(__dirname + '../../../');

module.exports = {
    dev: {
        name: 'Assignment API',
        startupMessage: "API Service started successfully",
        applicationPort: 9001
    },
    prd: {
        name: 'Assignment API',
        startupMessage: "API Service started successfully",
        applicationPort: 9001
    }
};