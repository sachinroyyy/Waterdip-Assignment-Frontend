const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  arrival_date_year: Number,
  arrival_date_month: String,
  arrival_date_day_of_month: Number,
  adults: Number,
  children: Number,
  babies: Number,
  country: String,
});

const Booking = mongoose.model('Booking', BookingSchema);

module.exports = Booking
