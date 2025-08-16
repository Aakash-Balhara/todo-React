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
    setText(""); // clear input
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", gap: 8 }}>
      <input
        type="text"
        placeholder="Add a task..."
        value={text}
        onChange={(e) => setText(e.target.value)} // e.target.value ✅
        style={{ flex: 1, padding: 8 }}
      />
      <button>Add</button>
    </form>
  );
}

export default TodoForm
