const csv = require("csvtojson");
const Booking = require("../models/Booking.models");

async function uploadData(req, res) {
  try {
    const bookings = await csv().fromFile("./hotel_bookings_data.csv");

    await Booking.insertMany(bookings); // Inserting data into the database
    res.status(200).json({ message: "Data uploaded successfully" });
  } catch (error) {
    console.error("Error importing data:", error);
    res.status(500).json({ message: "Data upload failed", error });
  }
}

async function getBookings(req, res) {
  const { startDate, endDate } = req.query;

  let filter = {};

  if (startDate && endDate) {
    // Data filtering according to the provided data
    filter = {
      arrival_date_year: {
        $gte: new Date(startDate).getFullYear(),
        $lte: new Date(endDate).getFullYear(),
      },
      arrival_date_month: {
        $gte: new Date(startDate).toLocaleString("default", { month: "long" }),
        $lte: new Date(endDate).toLocaleString("default", { month: "long" }),
      },
    };
  }

  try {
    const bookings = await Booking.find(filter);
    res.status(200).json(bookings);
  } catch (error) {
    console.error("Error fetching bookings:", error);
    res.status(500).json({ message: "Error fetching bookings", error });
  }
}

module.exports = { uploadData, getBookings };
