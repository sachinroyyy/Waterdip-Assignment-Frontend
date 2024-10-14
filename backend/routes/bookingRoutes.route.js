const express = require('express');
const router = express.Router();
const { uploadData, getBookings } = require('../controllers/bookingController.controller');

router.post('/upload-data', uploadData);

router.get('/bookings', getBookings);

module.exports = router;
