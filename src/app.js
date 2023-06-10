const express = require('express');
const app = express();
const router = express.Router();

const index = require('./routes/index');
const noteRoute = require('./routes/noteRoute');

app.use('/', index);
app.use('/notes', noteRoute);

module.exports = app;