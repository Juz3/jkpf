const express = require('express');
const path = require('path');

// password-generator express-route test app
const generatePassword = require('password-generator');

// route configurations
//const routeFile = require('./routes/routes');

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
  res.header('Access-Control-Allow-Origin', 'https://tranquil-oasis-40294.herokuapp.com');
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
app.use(express.static(path.join(__dirname, 'client/build')));

app.use('/api', router);

// Put all API endpoints under '/api'
app.get('/api/passwords', (req, res) => {
  const count = 1;

  // Generate some passwords
  const passwords = Array.from(Array(count).keys()).map(i =>
    generatePassword(20, false)
  )

  // Return them as json
  res.json(passwords);

  console.log(`Sent ${count} passwords`);
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

app.listen(port);

console.log(`server listening on ${port}`);