const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const passport = require('passport');

require('dotenv').config();

const {checkAuthHeader,setUser,notFound, errorHandler} = require('./middleware');


var app = express();

const auth = require('./auth');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(passport.initialize());
app.use(setUser);
app.get('/',checkAuthHeader,(req,res) => {
    res.json({
        message: 'Welcome to my community api!'
    });
})

app.use('/auth',auth);

app.use(notFound);
app.use(errorHandler);


module.exports = app;
