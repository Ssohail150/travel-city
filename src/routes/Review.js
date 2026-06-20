const express = require('express');
const router = express.Router();
const {addReview, getReviews, updateReview, deleteReview} = require('../controllers/Review');
const { authenticate } = require("../middlewares/authMiddleware");
const checkOwnership = require("../middlewares/checkOwnership");
const Review = require("../models/Review");


router.post('/', authenticate,  addReview);
router.get('/', authenticate,  getReviews);
router.get('/:id', authenticate,  getReviews);
router.put('/:id', authenticate, checkOwnership(Review), updateReview);
router.delete('/:id', authenticate, checkOwnership(Review),  deleteReview);

module.exports = router;
