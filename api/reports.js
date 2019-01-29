const router = require("express").Router();

const Report = require("../models/Report");

const QUERY_DISTANCE = 10000; // Query distance in meters

// Get all reports
router.get("/", (req, res) => {
  Report.find((err, reports) => res.status(200).send(reports));
});

// Get all reports around a point in QUERY_DISTANCE distance
router.get("/:lat/:long", (req, res) => {
  Report.find(
    {
      location: {
        $near: {
          $geometry: {
            type: "Point",
            coordinates: [req.params.long, req.params.lat]
          },
          $minDistance: 0,
          $maxDistance: QUERY_DISTANCE
        }
      }
    },
    (err, reports) => {
      if (err) console.log(err);
      res.status(200).send(reports);
    });

  /*const reports = Report.aggregate([
    {
      $geoNear: {
        near: {
          type: "Point",
          coordinates: [req.params.long, req.params.lat]
        },
        distanceField: "dist.calculated",
        maxDistance: QUERY_DISTANCE,
        minDistance: 0
      }
    }
  ])
    .then(res => {
      console.log(res);
    })
    .catch(err => console.log(err));*/
});

// Add new report
router.post("/", (req, res) => {
  const newReport = new Report({
    title: req.body.title,
    location: {
      type: "Point",
      coordinates: [req.body.lon, req.body.lat]
    }
  });
  newReport
    .save()
    .then(() => console.log(`Added report ${newReport.title}`))
    .catch(err => {
      console.log(err);
      res.status(400).send({ msg: "ERROR" });
    })
    .then(() => res.status(200).send({ msg: "OK" }));
});

module.exports = router;
