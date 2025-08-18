import React from 'react'

function TodoList({ todos, onToggle, onDelete, checkedState }) {
  if (todos.length === 0) {
    return <p>No todos yet</p>;
  }

  const filterTodo=todos.filter((todo)=>{
    if(checkedState === "checked"){
      return todo.completed;
    }
    if(checkedState === "unchecked"){
      return !todo.completed
    }
    return todo;
  })

  return (
    <ul >
      {filterTodo.map((t) => (
        <TodoItem key={t.id} todo={t} onToggle={onToggle} onDelete={onDelete} /> 
      ))}
    </ul>
  );
}

function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className='todoList'>
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
