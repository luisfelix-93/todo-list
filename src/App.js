import React, { useState } from 'react';
import Calendar from './components/Calendar';
import TodoList from './components/TodoList';
import './App.css'

const App = () => {
  const [selectedDate, setSelectedDate] = useState('');

  const handleDateChange = async (selectedDate) => {
    setSelectedDate(selectedDate)
    try {
      const response = await fetch.get('localhost:3001/api/get-todo-by-data', {
        params: {
          data: selectedDate,
        },
      });
  
      // Verifique a resposta da API e atualize a lista de tarefas ou realize outras ações necessárias
      console.log(response.data); // Exemplo de tratamento da resposta
    } catch (error) {
      console.error('Erro ao buscar tarefas por data:', error);
      // Trate o erro de acordo com suas necessidades
    }
  };
  

  return (
    <div className="container">
      <h1>Lista de Tarefas</h1>
      <Calendar handleDateChange={handleDateChange} />
      {selectedDate && <TodoList date={selectedDate} />}
    </div>
  );
};

export default App;
