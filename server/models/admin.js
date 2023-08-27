const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

const SALT_ROUNDS = 6

const adminSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      maxlength: 20,
      unique: true,
    },
    password: {
      type: String,
      trim: true,
      minlength: 3,
    },
  },
  {
    timestamps: true,
    toJSON: {
      transform: function (doc, ret) {
        delete ret.password
        return ret
      },
    },
  }
)

adminSchema.pre('save', async function (next) {
  // 'this' is the user doc
  if (!this.isModified('password')) return next()
  // the password is either new, or being updated
  this.password = await bcrypt.hash(this.password, SALT_ROUNDS)
})

module.exports = mongoose.model('Admin', adminSchema)
