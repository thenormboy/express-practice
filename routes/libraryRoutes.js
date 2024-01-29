const express = require('express')
const router = express.Router()

router.get("/", (req, res, next) => {
    res.render("index", { title: "Express" });
  });

router.get("/users", (req, res, next) => {
    res.send("respond with a resource");
  });
  
module.exports = router;