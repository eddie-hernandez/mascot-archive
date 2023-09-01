const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const ip = require('express-ip');

// loading env variables and open database connection
require('dotenv').config();
require('./server/config/database');

// initializing the express server
const app = express()

app.use(logger('dev'));
app.use(express.json());
app.use(cors({ origin: process.env.CLIENT_ORIGIN || `http://localhost:3000` }));

// middleware that adds the admin object from a JWT to req.admin
app.use(require('./server/config/verifyToken'))

// middleware to rate the limit of api hits for submissions
// const limiter = rateLimit({
//   windowMs: 60 * 60 * 1000, // 1 hour window
//   max: 5, // 5 submissions allowed per IP per hour
//   message: 'Too many submissions from this IP, please try again later.',
// });

// middleware to track user's IP address
app.use(ip())

// middleware to track user's submissions based on IP address
app.use(require('./server/config/submissionTracker'))

// importing submission routes
app.use('/api/submit', require('./server/routes/submissions'))
app.use('/api/admin', require('./server/routes/admins'))
app.use('/api/mascots', require('./server/routes/mascots'))

// Protect the api routes below from anon users
const ensureLoggedIn = require('./server/config/ensureLoggedIn')

const port = process.env.PORT || 3001

app.listen(port, function () {
  console.log(`Express app running on port ${port}`)
})