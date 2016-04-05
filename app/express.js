var express = require("express");
var bodyparser = require('body-parser');
var cookieparser = require('cookie-parser');
var session = require('express-session');
var mainRouter = require('../routes/main');
var productsRouter = require('../routes/products');
var priceRouter = require('../routes/price');
var favicon = require('serve-favicon');


module.exports = function(app, config) {

    //CORS middleware
    var allowCrossDomain = function(req, res, next) {
        res.header('Access-Control-Allow-Origin', 'http://localhost:8000/');
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        res.header('Access-Control-Allow-Headers', 'Content-Type');

        next();
    };
    app.set('case sensitive routing', false);
    app.use(favicon(__dirname + '/../../ui/favicon.ico'));
    app.use(cookieparser());

    app.use(bodyparser.json());

    app.use(bodyparser.urlencoded({
        extended: true
    }));
    app.set('views', config.rootpath + '/server/views');
    app.set('view engine', 'jade');
    app.use(express.static(config.rootpath + '/ui'));
    app.use(allowCrossDomain);

    //Route Registration Starts
    app.use('/auth', authRouter);
    app.use('/grocery', mainRouter);

};