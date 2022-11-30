
import { notFound } from 'next/navigation';
type Props = {
  params: {
    todoId: string;
  };
};
const fetchTodo = async (todoId: string) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId}`,
    { next: { revalidate: 60 } }
  );
  const todo = await res.json();
  return todo;
};
async function Todo({ params: { todoId } }: Props) {
  const todo = await fetchTodo(todoId);
  if (!todo.id) return notFound();
  return (
    <div className="p-10 bg-yellow-200 border-2 m-2 shadow-lg">
      <p>
        Todo: {todoId} : {todo.title}
      </p>
      <p>Completed: {todo.completed ? "yes" : "no"}</p>
      <p className="border-1 border-black mt-5 text-right">
        By User {todo.userId}
      </p>
    </div>
  );
}

export default Todo;
export async function generateStaticParams() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos`);
  const todos = await res.json();
  return todos
    .splice(0, 10)
    .map((todo: any) => ({ todoId: todo.id.toString() }));
}
