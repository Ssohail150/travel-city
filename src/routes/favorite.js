const express = require("express")
const route = express.Router()
const favoriteController = require("../controllers/favorite")
const { authenticate } = require("../middlewares/authMiddleware");
const checkOwnership = require("../middlewares/checkOwnership");
const Favorite = require("../models/Favorite");



route.post("/", authenticate, favoriteController.addFavorite)
route.get("/", authenticate, favoriteController.getFavorites);
route.get("/:id", authenticate, favoriteController.getFavoritesById);
route.patch("/:id", authenticate, checkOwnership(Favorite), favoriteController.updateFavoritesById);
route.delete("/:id", authenticate, checkOwnership(Favorite), favoriteController.deleteFavoriteById);
module.exports = route
