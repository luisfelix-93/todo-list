import React from 'react';

const TodoItem = ({ todo, onDelete }) => {
  const handleDeleteTodo = async () => {
    try {
      await fetch(`http://localhost:3000/todos/${todo._id}`, {
        method: 'DELETE',
      });
      onDelete(todo._id);
    } catch (error) {
      console.log('Erro ao excluir o todo:', error);
    }
  };

  return (
    <li>
      {/* Exibição dos dados do todo */}
      <button onClick={handleDeleteTodo}>Delete</button>
    </li>
  );
};

export default TodoItem;
