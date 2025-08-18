import React, {useState, useEffect } from 'react'
import './App.css'
import TodoForm from './components/TodoForm.jsx'
import TodoList from './components/TodoList.jsx';

function App() {

  const [todos, setTodos] = useState(() => {
  const savedTodo = localStorage.getItem("todos");
  return savedTodo ? JSON.parse(savedTodo) : [];
});

  const [checkedState,setCheckedState]=useState('All');

  function addTodo(todo) {
    setTodos((prev) => [todo, ...prev]);
  }

  useEffect(()=>{
    const storedTOdo= localStorage.getItem("todos");
    if(storedTOdo){
      setTodos(JSON.parse(storedTOdo));
    }
  },[])

   useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

function toggleTodo(id) {
  setTodos((prevTodos) => {
    let newTodos = prevTodos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed
        };
      } else {
        return todo;
      }
    });

    return newTodos;
  });
}

  function deleteTodo(id) {
    setTodos((prevTodos) => {
    let newTodos = prevTodos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          isDeleted: true
        };
      } else {
        return todo;
      }
    });

    return newTodos;
  });
  }

  return (
    <div className='container'>
      <h1 className='todoHeading'>Todo App</h1>
      <div id="sec1">
        <TodoForm onAdd={addTodo} checkedState={checkedState} setCheckedState={setCheckedState} />
      </div>
      <div id='sec2'>
        <TodoList  todos={todos.filter((t) => !t.isDeleted)} onToggle={toggleTodo} onDelete={deleteTodo} checkedState={checkedState} />
      </div>

    </div>
  )
}

export default App
