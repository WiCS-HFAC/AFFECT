const express = require('express');
const orm = require('orm');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const config = require('../config.json');

const app = express();
console.log("Adding models");
app.use(orm.express(config.url, {
  define: function (db, models, next) {
    models.Users = db.define("users", {
      user_id: {type: "serial", key: true},
      username: String,
      password: String,
      is_active: Boolean,
      salt: String,
      email: String,
      first_name: String,
      last_name: String,
      address: String,
      phone_home: String,
      phone_cell: String,
      type_id: {type: "serial", unique: false}
    }, {
        methods: {
          fullName: function () {
            return this.first_name + ' ' + this.last_name;
          }
        }
    });

    models.Roles = db.define("roles", {
      type_id: {type: "serial", key: true},
      type: String
    });

    models.Parents = db.define("parents", {
      user_id: {type: "serial"},
      worker_id: {type: "serial"},
      ssn: String,
      birth_date: Date,
      birthplace: String,
      nationality: String,
      height_ft: {type: "integer"},
      height_in: {type: "integer"},
      stature: String,
      hair_color: String,
      eye_color: String,
      skin_color: String,
      prefer_sex: String,
      prefer_age: String,
      prefer_sib_group_size: String,
      prefer_sib_group_gender: String,
      prefer_religion: String,
      bio: String,
      prev_foster: String,
      investigation: String,
      inv_date: Date,
      inv_reason: String,
      inv_outcome: String,
      med_gen_condition: String,
      med_last_exam: Date,
      meds: String,
      safe_assess: String,
      fam_checklist: String,
      ann_income: {type: "integer"},
      month_expenses: {type: "integer"},
      ref_name: String,
      ref_addr: String,
      ref_phone: String,
      ref_email: String
    });

    next();

  // db.sync(function(err) {
  //   if (err) throw err;

  //   //add a row to the Users table
  //   Users.create({ user_id: 01, username: "user", password: "password", is_active: true, salt: "salt"}, function (err) {
  //     if (err) throw err;

  //     // query the person table by surname
  //     Users.find({ username: "user" }, function (err, people) {
  //       if (err) throw err;

  //       console.log("People found: %d", people.length);
  //       console.log("First person: %s, user_id %d", people[0].username, people[0].user_id);
  //     });
  //   });
  // });

  }
}));
console.log("Finished adding models");
// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
  // req.models is a reference to models used above in define()
  // req.models.Roles.create({ type_id: 666, type: "Parent" }, function (err) {
  //   if (err) throw err;

  //   req.models.Roles.find({ type_id: 1 }, function (err, roles) {
  //     roles[0].save(function (err) {

  //     });
  //   });
  // });

  req.models.Users.create({ username: "user", password: "password", is_active: true, salt: "salt", type_id: 1 }, function (err) {
    if (err) throw err;

    // query the person table by surname
    req.models.Users.find({ username: "user" }, function (err, people) {
      if (err) throw err;

      console.log("People found: %d", people.length);
      console.log("First person: %s", people[0].username);

      people[0].save(function (err) {
        if (err) throw err;
      });
    });
  });
});
//app.use('/users', users);

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

/*

// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')));

// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

*/

module.exports = app;