import React, { useState } from "react"
import { DateRangePicker } from "react-date-range"
import { Card } from "react-bootstrap"
import "react-date-range/dist/styles.css"
import "react-date-range/dist/theme/default.css"
import "../utils/DatePicker.css"

const DatePicker = ({ onDateChange }) => {
  const [selectionRange, setSelectionRange] = useState({
    startDate: new Date(2015, 6, 1),
    endDate: new Date(),
    key: "selection",
  })

  const handleSelect = (ranges) => {
    setSelectionRange(ranges.selection)
    onDateChange(ranges.selection.startDate, ranges.selection.endDate)
  }

  return (
    <Card className="date-card shadow-lg" >
      <Card.Header className="bg-primary text-white text-center">
        Select Booking Date Range
      </Card.Header>
      <Card.Body className="d-flex justify-content-center">
        <DateRangePicker
          ranges={[selectionRange]}
          onChange={handleSelect}
          rangeColors={["#3f51b5"]}
          minDate={new Date(2015, 6, 1)}
          showDateDisplay={false}
        />
      </Card.Body>
    </Card>
  )
}

export default DatePicker
