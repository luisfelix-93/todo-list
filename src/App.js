import React, { useState } from 'react';
import Calendar from './components/Calendar';
import TodoList from './components/TodoList';
import './App.css'

const App = () => {
  const [selectedDate, setSelectedDate] = useState('');

  const handleDateTodo = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="container">
      <h1>ToDo List Calendar</h1>
      <Calendar date={selectedDate} handleDateChange={handleDateTodo} />
      {selectedDate && <TodoList date={selectedDate} />}
    </div>
  );
};

export default App;
