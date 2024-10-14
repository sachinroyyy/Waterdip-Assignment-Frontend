import React, { useEffect, useState } from "react"
import { fetchBookingsByDateRange } from "../utils/api"
import ColumnChart from "./ColumnChart"
import SparklineChart from "./SparklineChart"
import DatePicker from "./DatePicker"
import LineChart from "./LineChart"

const Dashboard = () => {
  const [data, setData] = useState({
    timeSeriesData: [],
    countryData: [],
    adultsData: [],
    childrenData: [],
  })

  const [loading, setLoading] = useState(true)

  const handleDateChange = async (startDate, endDate) => {
    setLoading(true)
    const filteredData = await fetchBookingsByDateRange(startDate, endDate)

    const timeSeriesData = filteredData.map((booking) => ({
      date: `${booking.arrival_date_year}-${booking.arrival_date_month}-${booking.arrival_date_day_of_month}`,
      visitors: booking.adults + booking.children + booking.babies,
    }))

    const countryData = filteredData.reduce((acc, booking) => {
      const foundCountry = acc.find((item) => item.country === booking.country)
      if (foundCountry) {
        foundCountry.visitors +=
          booking.adults + booking.children + booking.babies
      } else {
        acc.push({
          country: booking.country,
          visitors: booking.adults + booking.children + booking.babies,
        })
      }
      return acc
    }, [])

    const adultsData = filteredData.map((booking) => ({
      value: booking.adults,
    }))
    const childrenData = filteredData.map((booking) => ({
      value: booking.children,
    }))

    setData({
      timeSeriesData,
      countryData,
      adultsData,
      childrenData,
    })

    setLoading(false)
  }

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const response = await fetch("http://localhost:5500/api/bookings")
        const bookings = await response.json()

        const startDate = new Date(2015, 6, 1)
        const endDate = new Date()

        handleDateChange(startDate, endDate)
      } catch (err) {
        console.error("Error fetching booking data", err)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return (
    <div>
      <DatePicker onDateChange={handleDateChange} />
      {loading ? (
        <h2 className="loading">Loading...</h2>
      ) : (
        <div className="charts">
          <br />
          <br />
          <LineChart
            data={data.timeSeriesData}
            title="Number of  visitors per day"
          />
          <ColumnChart
            data={data.countryData}
            title="Number of visitors from each country"
          />
          <SparklineChart data={data.adultsData} title="Adult Visitors" />
          <SparklineChart data={data.childrenData} title="Children Visitors" />
        </div>
      )}
    </div>
  )
}

export default Dashboard
