import React, { useState } from 'react';
import './custom.css';

const Calendar = ({ handleDateChange }) => {
  const [selectedDate, setSelectedDate] = useState('');

  const handleChange = (event) => {
    const selectedDate = event.target.value;
    setSelectedDate(selectedDate);
    handleDateChange(selectedDate);
  };
  

  return (
    <div className="calendar-container">
      <h2>Calendário</h2>
      <input type="date" value={selectedDate} onChange={handleChange} />
    </div>
  );
};

export default Calendar;
