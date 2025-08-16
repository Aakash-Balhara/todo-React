import React from 'react'

function TodoList({ todos, onToggle, onDelete }) {
  if (todos.length === 0) {
    return <p>No todos yet</p>;
  }

  return (
    <ul >
      {todos.map((t) => (
        <TodoItem key={t.id} todo={t} onToggle={onToggle} onDelete={onDelete} />
      ))}
    </ul>
  );
}

function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className='todo-list'>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />
      <span style={{ flex: 1, textDecoration: todo.completed ? "line-through" : "none" }}>
        {todo.text}
      </span>
      <button onClick={() => onDelete(todo.id)} >✖</button>
    </li>
  );
}

export default TodoList
