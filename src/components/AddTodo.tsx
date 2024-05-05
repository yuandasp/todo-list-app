"use client";
import React from "react";

interface AddTodoProps {
  title: string;
  handleAddTodo: (e: React.FormEvent<HTMLFormElement>) => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function AddTodo({ title, handleAddTodo, handleInputChange }: AddTodoProps) {
  return (
    <form onSubmit={handleAddTodo}>
      <label htmlFor="title">Add Todo:</label>
      <input
        type="text"
        id="title"
        name="title"
        value={title}
        onChange={handleInputChange}
      />

      <button type="submit">Submit</button>
    </form>
  );
}

export default AddTodo;
