var express = require('express');
var orm = require('orm');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

app.use(orm.express('postgres://localhost:5432/test', {
  define: function (db, models, next) {
    models.Users = db.define("users", {
      user_id: int,
      username: String,
      password: String,
      is_active: Boolean,
      salt: String,
      email: String,
      first_name: String,
      last_name: String,
      address: String,
      role_id: int
    }, {
        methods: {
          fullName: function () {
            return this.first_name + ' ' + this.last_name;
          }
        }
    });

    models.Roles = db.define("roles", {
      type_id: int,
      type: String
    });

    models.Parents = db.define("parents", {

    });

    next();
  }
}));

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));s
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
