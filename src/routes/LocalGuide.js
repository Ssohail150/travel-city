const express = require("express")

const route = express.Router()

const localGuideController = require("../controller/LocalGuide")

route.post("/add", localGuideController.addLocalGuide)



module.exports = route