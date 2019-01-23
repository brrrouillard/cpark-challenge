const express = require("express");
const router = express.Router();

const Report = require("../models/Report");

// Get all reports
router.get("/", (req, res) => {
  Report.find((err, reports) => res.status(200).send(reports));
});

// Add new report
router.post("/", (req, res) => {
  const newReport = new Report({
    title: req.body.title,
    position: {
      type: "Coordinates",
      coordinates: [req.body.lon, req.body.lat]
    }
  });
  newReport
    .save()
    .then(() => console.log(`Added report ${newReport.title}`))
    .catch(err => console.log(err))
    .then(() => res.status(200).send({ msg: "OK" }));
});

module.exports = router;
