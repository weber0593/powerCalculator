var express = require('express');
var exphbs = require('express-handlebars');
var hbsIntl = require('handlebars-intl');
var helpers = require('handlebars-helpers');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var test = require('./routes/test');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('default locale', 'en-US');

const number = helpers.number();
const math = helpers.math();
const comparison = helpers.comparison();
var hbs = exphbs.create({
  defaultLayout: 'single',
  extname: '.hbs',
  helpers: [ number, math, comparison]
});
app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');
hbsIntl.registerWith(hbs.handlebars);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/test', test);

module.exports = app;
