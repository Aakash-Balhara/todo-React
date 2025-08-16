import React, { useState } from "react";

function TodoForm({ onAdd }) {
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const t = text.trim();
    if (!t) return;
    onAdd({
      id: Date.now(),
      text: t,
      completed: false,
    });
    setText("");
  }

  return (
    <>
      <input
        type="text"
        placeholder="Add a task..."
        value={text}
        onChange={(e) => setText(e.target.value)} 
        id="inp"
      />
      <button onClick={handleSubmit} id="btn">Add</button>
      </>
  );
}

export default TodoForm
