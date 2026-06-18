const express = require("express")
const route = express.Router()
const placeController = require("../controllers/Place")

route.post("/add",placeController.addPlace)


module.exports = route