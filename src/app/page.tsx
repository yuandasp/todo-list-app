"use client";

import AddTodo from "@/components/AddTodo";
import ListTodo from "@/components/ListTodo";
import { useState } from "react";

export default function Home() {
  const [title, setTitle] = useState("");
  const [listTodo, setListTodo] = useState([
    { title: "1", status: false },
    { title: "2", status: false },
  ]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleAddTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newTodo = { title, status: false };
    const updateListTodo = [...listTodo, newTodo];
    setListTodo(updateListTodo);
    setTitle("");
  };

  const handleDelete = (i: number) => {
    const list = [...listTodo];
    list.splice(i, 1);
    setListTodo(list);
  };

  const handleChangeStatus = (e: React.ChangeEvent<HTMLInputElement>) => {
    const index = parseInt(e.target.value);

    const updatedListTodo = [...listTodo];
    updatedListTodo[index].status = !updatedListTodo[index].status;
    setListTodo(updatedListTodo);
  };

  return (
    <main className="">
      <div>
        <p>Todo List</p>
        <AddTodo
          title={title}
          handleAddTodo={handleAddTodo}
          handleInputChange={handleInputChange}
        />
        <ListTodo
          todos={listTodo}
          handleDelete={handleDelete}
          handleChangeStatus={handleChangeStatus}
        />
      </div>
    </main>
  );
}
