const express = require("express");
const router = express.Router();
const knex = require("knex");

const knexConfig = require("../knexfile.js");
const db = knex(knexConfig.development);

router.post("/", (req, res) => {
  const { description, notes } = req.body;

  if (!description && !notes) {
    res.status(400).json({
      message: "Please provide a description and notes for the action."
    });
  } else if (!description) {
    res.status(400).json({
      message: "Please provide a description for the action."
    });
  } else if (!notes) {
    res.status(400).json({
      message: "Please provide notes for the action."
    });
  }

  db.insert(req.body, ["id"])
    .into("actions")
    .then(id => {
      res.status(201).json(id);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;
