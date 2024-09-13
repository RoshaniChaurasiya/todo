import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, toggleComplete, deleteTodo, editTodo, togglePriority }) => {
  return (
    <div className="todo-list">
      {todos.length === 0 ? (
        <p className="no-todos">No todos found</p>
      ) : (
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            togglePriority={togglePriority} // Ensure this prop is passed
          />
        ))
      )}
    </div>
  );
};

export default TodoList;
