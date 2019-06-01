const express = require("express");
const router = express.Router();
const knex = require("knex");

const knexConfig = require("../knexfile.js");
const db = knex(knexConfig.development);

router.post("/", (req, res) => {
  const { name, description } = req.body;

  if (!name && !description) {
    res.status(400).json({
      message: "Please provide a name and a description for the project."
    });
  } else if (!description) {
    res.status(400).json({
      message: "Please provide a description for the project."
    });
  } else if (!name) {
    res.status(400).json({
      message: "Please provide a name for the project."
    });
  }

  db.insert(req.body, ["id"])
    .into("projects")
    .then(id => {
      res.status(201).json(id);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;
