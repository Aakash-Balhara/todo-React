import React from 'react'
import './App.css'
import TodoForm from './components/TodoForm.jsx'
import TodoList from './components/TodoList.jsx';

function App() {

  const [todos, setTodos] = React.useState([]);

   function addTodo(todo) {
    setTodos((prev) => [todo, ...prev]);
  }

   function toggleTodo(id) {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  }

  function deleteTodo(id) {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  }

  return (
    <div>
      <h1>Todo App</h1>
      <TodoForm onAdd={addTodo} />
      <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />

    </div>
  )
}
import TodoItem from './components/TodoList.jsx';

export default App
