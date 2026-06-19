const express = require("express")
const route = express.Router()
const itineraryController = require("../controllers/TravelItinerary")

route.post("/add",itineraryController.addItinerary)

module.exports = route