const { Schema } = require('mongoose');

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedState` array in User.js
const stateSchema = new Schema({
  state: [
    {
      type: String,
    },
  ],
  confirmed: {
    type: Number,
  },
  deaths: {
    type: Number,
  },
  newConfirmed: {
    type: Number,
  },
  newDeaths: {
    type: Number,
  },
  // saved search id
  searchId: {
    type: String,
    required: true,
  },
  
});

module.exports = stateSchema;