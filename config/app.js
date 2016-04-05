var restify = require('restify');

module.exports = function(config) {

    var app = restify.createServer({
        name: config.name
    });
    app.use(restify.queryParser());
    app.use(restify.bodyParser());
    app.use(restify.CORS());


    // app.on('uncaughtException', function(req, res, route, err) {

    //     if (process.env.NODE_ENV == 'dev') {
    //         logger.error(err);
    //         res.send(500, 'uncaughtException Happened')
    //     }

    //     if (process.env.NODE_ENV == 'test') {

    //         logger.error(err);
    //         res.send(501, 'uncaughtException Happened , Error ' + err);
    //     }


    // });
    return app;
}