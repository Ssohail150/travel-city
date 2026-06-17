const express = require("express")
const route = express.Router()
const mosqueController = require("../controller/mosque")

route.post("/", mosqueController.addMosque)

module.exports = route