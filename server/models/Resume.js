const { Schema, model } = require("mongoose");

const resumeSchema = new Schema({
  //I need the things

  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, "Must match an email address!"],
  },
});

const Resume = model('Resume', resumeSchema);

module.exports = Resume;