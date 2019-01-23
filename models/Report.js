const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema({
  type: "Feature",
  properties: {
    title: {
      type: String,
      required: true
    },
    time: {
      type: Datetime,
      default: Date.now
    }
  },
  geometry: {
    type: "Point",
    coordinates: [Number]
  }
});

const Report = mongoose.model("Report", reportSchema);
module.exports = Report;
