var mongojs = require('mongojs'),
    databaseURL = 'mongodb://abcd:abcd123@ds011820.mlab.com:11820/companydetails',
    config = require('../config/config'),
    db = mongojs(databaseURL),
    test = db.collection('details');

module.exports = {
    getCompanies: function(req, res, callback) {
        test.find(null, {
                _id: 0
            },
            function(err, data) {
                if (err) {
                    logger.error(err);
                }
                callback(null, data);
            });
    },
    getCompany: function(req, res, callback) {
        var id = JSON.parse(req.params.id);
        var query = {
            company_id: id
        }
        test.find(query, {
                _id: 0
            },
            function(err, data) {
                if (err) {
                    logger.error(err);
                }
                if (data.length == 0) {
                    var msg = "No company exists";
                    callback(null, msg);
                } else {
                    callback(null, data);
                }

            });
    },
    addNewCompany: function(req, res, callback) {
        var newCompany = req.body.company;
        var query = {
            company_id: req.body.company.company_id
        }
        test.find(query, function(err, data) {
            if (data.length > 0) {
                var msg = {
                    message: "Company already exists!!!"
                };
                callback(null, msg);
            } else {
                test.insert(newCompany, function(err, data) {
                    if (err) {
                        logger.error(err);
                    }
                    var msg = {
                        message: "New company added to the database!!!"
                    };
                    callback(null, msg);
                })
            }
        })

    },
    updateCompany: function(req, res, callback) {
        var id = JSON.parse(req.body.company.company_id);
        var query = {
            company_id: id
        }
        var updateCompany = {
            $set: {
                address: req.body.company.address,
                city: req.body.company.city,
                country: req.body.company.country,
                email: req.body.company.email,
                phone_number: req.body.company.phone_number,
                directors: req.body.company.directors,
                owners: req.body.company.owners
            }
        }
        test.find(query, function(err, data) {
            if (data.length > 0) {
                test.update(query, updateCompany, {
                    multi: false
                }, function(err, data) {
                    if (err) {
                        logger.error(err);
                    }
                    var msg = {
                        message: "Company details updated to the database!!!"
                    };
                    callback(null, msg);
                })
            } else {
                var msg = {
                    message: "No company exists!!!"
                };
                callback(null, msg);
            }
        });
    }

}