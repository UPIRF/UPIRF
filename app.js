const dotenv = require('dotenv');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const logger = require('morgan');
const indexRoute = require('./routes/index')
const collegeRoute = require('./routes/college')



// configurations
dotenv.config();
const host = process.env.SERVER_HOST
const port = process.env.SERVER_PORT
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger('dev'));
app.use('/public', express.static(path.join(__dirname, '/public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


// Routes
app.use('/', indexRoute);
app.use('/college', collegeRoute);



// Server Set-up
app.listen(process.env.SERVER_PORT || '5000', (err) => {
    if (err) console.log(err);
    console.log(`Server Up and Running at http://${host}:${port}/`);
});

module.exports = app;
