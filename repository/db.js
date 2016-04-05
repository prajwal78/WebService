var mongojs = require('mongojs'),
    config = require('../config/config'),
    db = mongojs('mongodb://abcd:abcd123@ds011820.mlab.com:11820/companydetails', ['details']);

module.exports = {
    getCompanies: function(req, res, callback) {
        db.details.find(null, {
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
        db.details.find(query, {
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
        db.details.find(query, function(err, data) {
            if (data.length > 0) {
                var msg = {
                    message: "Company already exists!!!"
                };
                callback(null, msg);
            } else {
                db.details.insert(newCompany, function(err, data) {
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
        db.details.find(query, function(err, data) {
            if (data.length > 0) {
                db.details.update(query, updateCompany, {
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
    // addBeneficialOwners: function(req, res, callback) {
    //     var id = req.params.id;
    //     var query = {
    //         company_id: req.body.company.company_id
    //     }
    //     var addOwners = {
    //         $set: {
    //             owners: req.body.company.owners
    //         }
    //     }
    //     db.details.find(query, function(err, data) {
    //         if (data.length > 0) {
    //             db.details.findAndModify(query, addOwners, {
    //                 new: true
    //             }, function(err, data) {
    //                 if (err) {
    //                     logger.error(err);
    //                 }
    //                 var msg = "Owners updated to the database";
    //                 callback(null, msg);
    //             })
    //         } else {
    //             var msg = "No company exists";
    //             callback(null, msg);
    //         }
    //     });
    // }
}