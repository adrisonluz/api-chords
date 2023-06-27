const express = require('express');
const app = express();
const router = express.Router();

const index = require('./routes/index');
const noteRoute = require('./routes/noteRoute');
const chordRoute = require('./routes/chordRoute');

app.use('/', index);
app.use('/notes', noteRoute);
app.use('/chords', chordRoute);

module.exports = app;