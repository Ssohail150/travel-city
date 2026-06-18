const express = require("express")
const route = express.Router()
const hotelControllers = require("../controllers/hotel")

route.post("/add", hotelControllers.addHotel)



module.exports = route