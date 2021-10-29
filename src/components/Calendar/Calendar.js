import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const Calendar = () => {
  //   const [startDate, setStartDate] = useState(new Date());
  //   return (
  //     <DatePicker
  //       selected={startDate}
  //       onChange={(date) => setStartDate(date)}
  //       maxDate={(new Date(), 5)}
  //       placeholderText="Select a date before 5 days in the future"
  //     />
  //   );

  // () => {
  const [date, setDate] = useState(new Date());

  const handleCalendarClose = () => console.log("Calendar closed");
  const handleCalendarOpen = () => console.log("Calendar opened");

  return (
    <DatePicker
      selected={date}
      onChange={(date) => setDate(date)}
      onCalendarClose={handleCalendarClose}
      onCalendarOpen={handleCalendarOpen}
    />
  );
  // };
};
export default Calendar;

// () => {
//   const [startDate, setStartDate] = useState(null);
//   return (
//     <DatePicker
//       selected={startDate}
//       onChange={(date) => setStartDate(date)}
//       minDate={subDays(new Date(), 5)}
//       placeholderText="Select a date after 5 days ago"
//     />
//   );
// };
