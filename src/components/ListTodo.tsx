"use client";

import Image from "next/image";
import { Fragment } from "react";

interface ListTodoProps {
  todos: { title: string; status: boolean }[];
  handleDelete: (i: number) => void;
  handleChangeStatus: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function ListTodo({ todos, handleDelete, handleChangeStatus }: ListTodoProps) {
  return (
    <>
      {todos.map((todo, i) => (
        <div key={i} className="flex justify-between px-11 gap-4 my-4">
          {/* <p>{todo.status ? "done" : "on process"}</p> */}
          <input
            type="checkbox"
            id="status"
            name="status"
            value={i}
            onChange={handleChangeStatus}
            checked={todo.status}
            className="w-[20px]"
          />
          <div className="w-full bg-yellow-50 px-2 rounded-md break-all">
            {todo.status ? (
              <div className="flex gap-2 items-center py-1">
                <p className="line-through">{todo.title}</p>
                <p className="text-green-700 font-bold text-xs">(Done!)</p>
              </div>
            ) : (
              <p className="py-1">{todo.title}</p>
            )}
          </div>
          <button onClick={() => handleDelete(i)}>
            <Image
              src="/assets/delete.png"
              alt="delete todo"
              width={16}
              height={16}
            />
          </button>
        </div>
      ))}
    </>
  );
}

export default ListTodo;
