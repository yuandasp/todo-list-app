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
      {/* <label htmlFor="title">Add Todo:</label> */}
      <div className="w-full h-8 flex justify-between px-11">
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={handleInputChange}
          className="w-4/5 border-2 border-blue-500 rounded-md mr-2 px-2"
        />

        <button
          type="submit"
          className="w-1/5 bg-blue-500 text-white font-semibold px-1 py-1 text-sm rounded-md"
        >
          Add
        </button>
      </div>
    </form>
  );
}

export default AddTodo;
