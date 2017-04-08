'use strict';

const app = require('./app');
const express = require('express');
const pg = require('pg');
const orm = require('orm');
const PORT = 9000;

// TODO: Remove jade as a dependency

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});