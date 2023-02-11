const express = require('express');

const Logs = require('./controllers/logs')

const app = express();

app.use('/logs', Logs);

module.exports = app;

