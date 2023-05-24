import React, { useState } from 'react';
import './custom.css'

const Calendar = ({ handleDateChange }) => {
  const [date, setDate] = useState('');

  const handleChange = (event) => {
    const selectedDate = event.target.value;
    setDate(selectedDate);
    handleDateChange(selectedDate);
  };

  return (
    <div className='calendar-container'>
      <h2>Calendar</h2>
      <input type="date" value={date} onChange={handleChange} />
    </div>
  );
};

export default Calendar;
