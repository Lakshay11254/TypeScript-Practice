"use client";
import React, { FormEvent, useState } from "react";

const AddTodo = () => {
  const [todo, setTodo] = useState("");
  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleAddTodo(todo);
    setTodo(value:"")
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        placeholder="Wanna add somethin..?"
        id=""
        value={todo}
        onChange={(event) => setTodo(event.target.value)}
      />

      <button type="submit">ADD</button>
    </form>
  );
};

export default AddTodo;
