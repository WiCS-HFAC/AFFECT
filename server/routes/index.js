const express = require('express');
const router = express.Router();
const pg = require('pg');
const orm = require('orm');
const path = require('path');
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/test';


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;