import React, { useState } from "react";

function TodoForm({ onAdd,checkedState,setCheckedState }) {
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const t = text.trim();
    if (!t) return;
    onAdd({
      id: Date.now(),
      text: t,
      completed: false,
      isDeleted: false 
    });
    setText("");
  }
console.log(checkedState);
  return (
    <>
      <input
        type="text"
        placeholder="Add a task..."
        value={text}
        onChange={(e) => setText(e.target.value)} 
        id="inp"
      />
      <select id="dropdown" onChange={(e)=>setCheckedState(e.target.value)}>
            <option id="all" selected>All</option>
            <option id="checked">checked</option>
            <option id="unchecked">unchecked</option>
        </select >
      <button onClick={handleSubmit} id="btn">Add</button>
    </>
  );
}

export default TodoForm
