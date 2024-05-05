"use client";
interface ListTodoProps {
  todos: { title: string; status: boolean }[];
  handleDelete: (i: number) => void;
  handleChangeStatus: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function ListTodo({ todos, handleDelete, handleChangeStatus }: ListTodoProps) {
  return (
    <div>
      {todos.map((todo, i) => (
        <div key={i}>
          <p>{todo.status ? "done" : "on process"}</p>
          <input
            type="checkbox"
            id="status"
            name="status"
            value={i}
            onChange={handleChangeStatus}
            checked={todo.status}
          />
          <p>{todo.title}</p>
          <button onClick={() => handleDelete(i)}>delete</button>
        </div>
      ))}
    </div>
  );
}

export default ListTodo;
