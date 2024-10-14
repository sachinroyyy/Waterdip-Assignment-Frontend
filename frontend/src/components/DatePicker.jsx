import React, { useState } from "react";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const DatePicker = ({ onDateChange }) => {
  const [selectionRange, setSelectionRange] = useState({
    startDate: new Date(2015, 6, 1),
    endDate: new Date(),
    key: "selection",
  });

  const handleSelect = (ranges) => {
    setSelectionRange(ranges.selection);
    onDateChange(ranges.selection.startDate, ranges.selection.endDate);
  };

  return (
    <DateRangePicker
      ranges={[selectionRange]}
      onChange={handleSelect}
      rangeColors={["#3f51b5"]}
      minDate={new Date(2015, 6, 1)}
    />
  );
};

export default DatePicker;
