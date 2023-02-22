const express = require("express");

const router = express.Router();

router.post("/", (req, res) => {
    console.log(res)
  if (req.langugage === "C") {
    executeC();
  } else if (req.langugage === "Python") {
    executePython();
  } else if (req.langugage === "C++") {
    executeCpp();
  }
});

module.exports = router;
