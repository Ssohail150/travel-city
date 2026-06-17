const express = require("express");
const route = express.Router();
const { createCity, getCities, getCityById, updateCity } = require("../controllers/city");

route.post("/", createCity);
route.get("/", getCities);
route.get("/:id", getCityById);
route.put("/:id", updateCity);

module.exports = route;

