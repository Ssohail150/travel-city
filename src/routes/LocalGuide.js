const express = require("express")

const route = express.Router()

const localGuideController = require("../controller/LocalGuide")

route.post("/add", localGuideController.addLocalGuide)

route.get("/get", localGuideController.getAllLocalGuides)
route.get("/get/:id", localGuideController.getLocalGuideById)

module.exports = route