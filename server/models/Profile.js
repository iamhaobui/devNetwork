const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  handle: {
    type: String,
    required: true,
    max: 40
  },
  status: {
    type: String,
    required: true
  },  
  company: {
    type: String
  },  
  bio: {
    type: String
  },
  skills: {
    type: [String],
    required: true
  },
  githubAcc: {
    type: String
  },
  social: {
    youtube: {
      type: String
    },
    linkedin: {
      type: String
    },
    facebook: {
      type: String
    },
    twitter: {
      type: String
    },
  },
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = Profile = mongoose.model('profile', ProfileSchema)