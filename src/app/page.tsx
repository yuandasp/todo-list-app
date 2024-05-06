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
    <main className="min-h-screen w-full flex justify-center py-11">
      <div className="w-full mx-11 md:mx-0 lg:mx-0 md:w-1/2 lg:w-1/3">
        <p className="text-center text-2xl p-4 mb-2 font-bold bg-blue-800 text-white rounded-lg">
          My List Todo
        </p>
        <div className="bg-blue-100 py-4 rounded-lg">
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
      </div>
    </main>
  );
}
