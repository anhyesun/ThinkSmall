require('./db');
var createError = require('http-errors');
var express = require('express');
var favicon = require('serve-favicon');
var path = require('path');
var cors = require('cors');
var auth = require('./init/auth');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

async function init() {
  app.use(cors());
  app.use(logger('dev'));
  app.use(express.json());
  app.use(express.static(path.join(__dirname, '../client/build')));
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser('anything'));
  app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

  await auth(app);

  app.use('/', indexRouter);

  // combine server-side and client-side routing (catch-all)
  app.use('/*', function (req, res) {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });

  // catch 404 and forward to error handler
  app.use(function (req, res, next) {
    next(createError(404));
  });

  // error handler
  app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });
}

init()

module.exports = app;
