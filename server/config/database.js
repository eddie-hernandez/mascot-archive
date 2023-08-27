const mongoose = require('mongoose')

mongoose.set('strictQuery', false)

mongoose.connect(process.env.REACT_APP_DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const db = mongoose.connection

db.on('connected', function () {
  console.log(`Connected to ${db.name} at ${db.host}:${db.port}`)
})
