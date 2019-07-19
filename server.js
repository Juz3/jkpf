/**
 *  <server.js>
 *
 *  Copyright information
 *
 *      Copyright (C) 2019 Jussi Koivumäki <firstname.lastname@outlook.com>
 * 
 *  @author Jussi Koivumäki
 *
 */

const express = require('express');
const path = require('path');

// needed for parsing form data from request body
const bodyParser = require('body-parser');

// Express instance
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// router in Express
const router = express.Router();

const port = process.env.PORT || 5000;

// Different response headers for production and local
if(process.env.NODE_ENV === 'production') {
  // Router headers
  router.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://jkpf.herokuapp.com');
  res.header('Access-Control-Allow-Headers', 
  'Origin, X-Requested-With, Content-Type, Accept, Cookie, Authorization');
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
  });
  
} else {
  // Router headers
  router.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Headers', 
  'Origin, X-Requested-With, Content-Type, Accept, Cookie, Authorization');
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
  });
}

// Serve static files from the React app
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'client/build')));

app.use('/api', router);

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.listen(port);

console.log(`server listening on ${port}`);