const express = require("express")
const route = express.Router()
const itineraryController = require("../controllers/TravelItinerary")

route.post("/add",itineraryController.addItinerary)
route.get("/get",itineraryController.getItinerary)

module.exports = route