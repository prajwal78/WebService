var common = require('../helper/common'),
    db = require('../repository/db');

module.exports = function(app) {

    app.get('/companies', function(req, res, next) {
        req.requestId = common.getRequestID();
        logger.info('%d request received for getCompanies +', req.requestId);

        db.getCompanies(req, res, function(err, response) {

            logger.info('%d request processed for getCompanies -', req.requestId);
            res.send(200, response);
        });
    });

    app.get('/company/:id', function(req, res, next) {
        req.requestId = common.getRequestID();
        logger.info('%d request received for getCompany +', req.requestId);

        db.getCompany(req, res, function(err, response) {
            logger.info('%d request processed for getCompany -', req.requestId);
            res.send(200, response);
        });
    });

    app.post('/company', function(req, res, next) {
        req.requestId = common.getRequestID();
        logger.info('%d request received for addNewCompany +', req.requestId);

        db.addNewCompany(req, res, function(err, response) {

            logger.info('%d request processed for addNewCompany -', req.requestId);
            res.send(200, response);
        });
    });

    app.put('/company', function(req, res, next) {
        req.requestId = common.getRequestID();
        logger.info('%d request received for updateCompany +', req.requestId);

        db.updateCompany(req, res, function(err, response) {

            logger.info('%d request processed for updateCompany -', req.requestId);
            res.send(200, response);
        });
    });

    // app.put('/company/addowners', function(req, res, next) {
    //     req.requestId = common.getRequestID();
    //     logger.info('%d request received for addOwners +', req.requestId);

    //     db.addBeneficialOwners(req, res, function(err, response) {

    //         logger.info('%d request processed for addOwners -', req.requestId);
    //         res.send(200, response);
    //     });
    // });


}