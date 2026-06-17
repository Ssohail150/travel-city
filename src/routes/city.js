const express = require("express");
const route = express.Router();
const { createCity, getCities } = require("../controllers/city");

route.post("/", createCity);
route.get("/", getCities);

module.exports = route;