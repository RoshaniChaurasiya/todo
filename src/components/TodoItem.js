import React, { useState } from 'react';

const TodoItem = ({ todo, toggleComplete, deleteTodo, editTodo, togglePriority }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleEditChange = (e) => setNewText(e.target.value);

  const handleEditSubmit = (e) => {
    e.preventDefault();
    if (newText.trim()) {
      editTodo(todo.id, newText);
      setIsEditing(false);
    }
  };

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''} ${todo.priority ? 'priority' : ''}`}>
      {isEditing ? (
        <form onSubmit={handleEditSubmit}>
          <input
            type="text"
            value={newText}
            onChange={handleEditChange}
          />
          <button type="submit">Save</button>
        </form>
      ) : (
        <>
          <input
            type="radio"
            checked={todo.priority}
            onChange={() => togglePriority(todo.id)}
            className="priority-radio"
          />
          <span onClick={() => toggleComplete(todo.id)}>
            {todo.text}
          </span>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </>
      )}
    </div>
  );
};

export default TodoItem;
