import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (text) => {
    setTodos([...todos, { text, done: false }]);
  };

  const handleCompleteTodo = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.done = !todo.done;
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const handleDeleteAllTodos = () => {
    setTodos([]);
  };

  const handleDeleteOneTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const handleHideDeleteButton = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.deleteButton = false;
      }
      return todo;
    });
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <header>
        
        <h1>My To-Do List</h1>
      </header>
      <div className="todo-list">
        {/* TodoList */}
        {todos.map((todo) => (
          <div key={todo.id} className={`todo-item ${todo.done ? 'completed' : ''}`}>
            <span>{todo.text}</span>
            {!todo.done && (
              <button onClick={() => handleCompleteTodo(todo.id)}>Complete</button>
            )}
            {todo.done && (
              <button
                onClick={() => handleDeleteOneTodo(todo.id)}
                disabled={todo.deleteButton}
              >
                Delete
              </button>
            )}
          </div>
        ))}
        {/* Add new Todo */}
        <div className="add-todo">
          <input
            type="text"
            placeholder="Add new Todo"
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleAddTodo(e.target.value);
                e.target.value = '';
              }
            }}
          />
        </div>
        <button onClick={handleDeleteAllTodos}>Delete All Todos</button>
      </div>
    </div>
  );
}

export default App;