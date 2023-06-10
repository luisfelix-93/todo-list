import React from 'react';

const TodoDetailsModal = ({ todo, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Detalhes</h2>
        <p>
            <strong>Task: </strong> {todo.text}
        </p>
        <p>
            <strong>Data: </strong> {todo.date}
        </p>
        <p>
          <strong>Horário de início:</strong> {todo.startTime}
        </p>
        <p>
          <strong>Tempo gasto:</strong> {todo.timeSpent}
        </p>
        <p>
          <strong>Observações:</strong> {todo.notes}
        </p>
        <button onClick={onClose}>Fechar</button>
      </div>
    </div>
  );
};

export default TodoDetailsModal;
