import axios from "axios";

const API_URL = "http://localhost:5500/api";

export const fetchBookingsByDateRange = async (startDate, endDate) => {
  try {
    const response = await axios.get(`${API_URL}/bookings`, {
      params: { startDate, endDate },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching bookings:", error);
    return [];
  }
};
