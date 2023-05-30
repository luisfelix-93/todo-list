import React, {useState} from 'react';
import TodoDetailsModal from './TodoDetailsModal';

const TodoItem = ({ todo, onDelete, onUpdate }) => {
  const [showDetails, setShowDetails] = useState(false);
  const handleToggleDetails = () =>{
    setShowDetails(!showDetails);
  }
  const handleDeleteTodo = async () => {
    try {
      await fetch(`http://localhost:3001/api/delete-todos/${todo._id}`, {
        method: 'DELETE',
      });
      onDelete(todo._id);
    } catch (error) {
      console.log('Erro ao excluir o todo:', error);
    }
  };

  // const handleUpdateTodo = async () => {
  //   try{
  //     const updateTodo = {
  //       ...todo,
  //       status: 'Concluido'
  //     }

  //     await fetch(`http://localhost:3001/api/delete-todos/${todo._id}`, {
  //       method: 'PUT',
  //       headers:{
  //         'Content-Type': 'application-json'
  //       },
  //       body: JSON.stringify(updateTodo)
  //     });

  //     onUpdate(updateTodo);

  //   } catch(erro){
  //     console.log('Erro ai atualizar a tarefa', erro)
  //   }
  // }

  return (
    <li>
      {/* Exibição dos dados do todo */}
      <span>
        <strong>{todo.text}</strong>
      </span>
      <button onClick={handleDeleteTodo}>Delete</button>
      {/* <button onClick={handleUpdateTodo}>Atualizar</button> */}
      <button onClick={handleToggleDetails}>Detalhes</button>

      {showDetails && (
        <TodoDetailsModal todo={todo} onClose={handleToggleDetails}/>
      )}
    </li>
  );
};

export default TodoItem;
