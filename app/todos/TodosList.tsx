import Link from "next/link";

type Props = {};
const fetchTodos = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos = await res.json();
  return todos;
};
async function TodosList({}: Props) {
  const todos = await fetchTodos();
  return (
    <>
      {todos.map((todo: any) => {
        return (
          <p key={todo.id}>
            <Link href={`/todos/${todo.id}`}>Todo: {todo.id}</Link>
          </p>
        );
      })}
    </>
  );
}

export default TodosList;
