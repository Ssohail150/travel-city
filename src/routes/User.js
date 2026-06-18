const express = require('express');
const router = express.Router();
const {addUser, getUsers} = require('../controllers/User');

router.post('/add', addUser);
router.get('/get', getUsers);
router.get('/get/:id', getUsers);

module.exports = router;