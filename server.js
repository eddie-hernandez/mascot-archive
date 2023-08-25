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

// importing submission routes
const submissionRoutes = require('./server/routes/submissions');
app.use('/photoupload', submissionRoutes)

const port = process.env.PORT || 3001

app.listen(port, function () {
  console.log(`Express app running on port ${port}`)
})