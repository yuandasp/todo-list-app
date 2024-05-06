"use client";

import Image from "next/image";

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
            className="w-[16px]"
          />
          <div className="w-full bg-yellow-100 px-2">
            {todo.status ? (
              <p className="line-through">{todo.title}</p>
            ) : (
              <p>{todo.title}</p>
            )}
          </div>
          <button onClick={() => handleDelete(i)}>
            <Image
              src="/assets/delete.png"
              alt="delete todo"
              width={12}
              height={12}
            />
          </button>
        </div>
      ))}
    </>
  );
}

export default ListTodo;
