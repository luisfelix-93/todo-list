import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem';
import moment from 'moment'
import './custom.css'

const TodoList = ({ date }) => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [notes, setNotes] = useState('');
  useEffect(() =>{
    fetchTodos();
  }, []);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleStartTimeChange = (event) => {
    setStartTime(event.target.value);
  };

  const handleEndTimeChange = (event) => {
    setEndTime(event.target.value);
  };

  const handleNotesChange = (event) => {
    setNotes(event.target.value);
  };

  const handleAddTodo = async () => {
    if (inputValue.trim() !== '') {
      const newTodo = {
        text: inputValue,
        date,
        startTime,
        endTime,
        notes,
      };
      try {
        const response = await fetch('http://localhost:3001/api/post-todos', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newTodo),
        });
        const data = await response.json();
        setTodos([...todos, data]);
        setInputValue('');
        setStartTime('');
        setEndTime('');
        setNotes('');
      } catch(error){
        console.log('Erro ao criar o todo:', error);
      }

    }

  };

  const fetchTodos = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/get-todos');
      const data = await response.json();
      setTodos(data);
    } catch (error) {
      console.log('Erro ao buscar os todos:', error);
    }
  }

  const handleDeleteTodo = async (index) => {
    try {
      const todoId = todos[index]._id;
      await fetch(`http://localhost:3001/api/todos/${todoId}`, {
        method: 'DELETE',
      });
      setTodos((prevTodos) => {
        const updatedTodos = [...prevTodos];
        updatedTodos.splice(index, 1);
        return updatedTodos;
      });
    } catch (error) {
      console.log('Erro ao excluir o todo:', error);
    }
  };


  
 

  return (
    <div className='todo-container'>
      <h2>Lista de Tarefas para {date}</h2>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Task"
      />
      <input
        type="time"
        value={startTime}
        onChange={handleStartTimeChange}
        placeholder="Start Time"
      />
      <input
        type="time"
        value={endTime}
        onChange={handleEndTimeChange}
        placeholder="End Time"
      />
      <textarea
        value={notes}
        onChange={handleNotesChange}
        placeholder="Notes"
      ></textarea>
      <button onClick={handleAddTodo}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            todo={todo}
            index={index}
            onDelete={handleDeleteTodo}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
