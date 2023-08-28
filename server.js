const express = require('express');
const logger = require('morgan');
const cors = require('cors');

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