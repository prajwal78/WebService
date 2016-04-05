var path = require('path');
var __dirname = ".",
    rootpath = path.normalize(__dirname + '../../../');

module.exports = {
    dev: {
        name: 'Assignment API',
        startupMessage: "API Service started successfully",
        applicationPort: 9001,
        dbUrl: 'mongodb://abcd:abcd123@ds011820.mlab.com:11820/companydetails'
    },
    prd: {
        name: 'Assignment API',
        startupMessage: "API Service started successfully",
        applicationPort: 9001,
        dbUrl: 'mongodb://abcd:abcd123@ds011820.mlab.com:11820/companydetails'
    }
};