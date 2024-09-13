import React, { useState } from 'react';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';
import SearchTodo from './components/SearchTodo';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const addTodo = (text) => {
    // Trim the text to remove any leading or trailing whitespace
    if (text.trim() === '') {
      return; // Exit the function if the text is empty
    }

    const newTodo = { id: Date.now(), text, completed: false, priority: false };
    setTodos([...todos, newTodo]);
  };


  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id, newText) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  const togglePriority = (id) => {
    setTodos(todos.map((todo) =>
      todo.id === id ? { ...todo, priority: !todo.priority } : todo
    ));
  };

  const filteredTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="app">
      <h1>My Todo List</h1>
      <SearchTodo searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <TodoInput addTodo={addTodo} />
      <TodoList
        todos={filteredTodos}
        toggleComplete={toggleComplete}
        deleteTodo={deleteTodo}
        editTodo={editTodo} // Pass the editTodo function here
        togglePriority={togglePriority} // Pass togglePriority here
      />
    </div>
  );
};

export default App;