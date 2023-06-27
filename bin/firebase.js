const firebase = require('firebase-admin');
var serviceAccount = require("../cert-firebase.json");

require('dotenv').config();

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: process.env.FB_DATABASE_URL
});

const database = firebase.database().ref('notes');
module.exports = database;