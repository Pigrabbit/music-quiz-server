const express = require("express");
const router = express.Router();

const problemController = require("../controllers/problemController")

router.get("/", problemController.problemList)
router.post("/", problemController.problemCreatePost)

module.exports = router;
