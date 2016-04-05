//Environment Variable NODE_ENV will responsible for Configuration
var env = process.env.NODE_ENV || 'dev';

//Setting up logger
logger = require('./utilities/logger');

//Fetching configuration based on environment
config = require('./config/config')[env];

//Fetching DB Layer in Memory
db = require('./repository/db');

var app = require('./config/app')(config);

//Loading routes for Gorcery Preference API
require('./routes/routes')(app);

var port = process.env.PORT || config.applicationPort,
    startupMessage = config.startupMessage;

//Server Start     
app.listen(port, function() {
    logger.info('%s on Port: %s ', startupMessage, port);
});