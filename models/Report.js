const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  time: {
    type: Date,
    default: Date.now
  },
  location: {
    type: {
      type: String,
      enum: ["Point"],
      required: true
    },
    coordinates: {
      type: [Number],
      required: true
    }
  }
});

const Report = mongoose.model("Report", reportSchema);
module.exports = Report;
