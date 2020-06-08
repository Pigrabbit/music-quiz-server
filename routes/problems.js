const express = require("express");
const router = express.Router();

const problemController = require("../controllers/problemController")

router.get("/", problemController.getProblemList)
router.post("/", problemController.postCreateProblem)

module.exports = router;
