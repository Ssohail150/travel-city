const express = require("express")
const route = express.Router()
const itineraryController = require("../controllers/TravelItinerary")
const { authenticate } = require("../middlewares/authMiddleware");
const checkOwnership = require("../middlewares/checkOwnership");
const TravelItinerary = require("../models/TravelItinerary");


route.post("/", authenticate, itineraryController.addItinerary)
route.get("/", authenticate, itineraryController.getItinerary)
route.get("/:id", authenticate, itineraryController.getItineraryById)
route.patch("/:id", authenticate, checkOwnership(TravelItinerary), itineraryController.updateItineraryById)
route.delete("/:id", authenticate, checkOwnership(TravelItinerary), itineraryController.deleteItineraryById)
module.exports = route
