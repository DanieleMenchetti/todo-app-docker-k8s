import type { Todo } from "../types/Todo";
import TodoItem from "./TodoItem";

type Props = {
  todos: Todo[];
};

function TodoList({ todos }: Props) {
  if (todos.length === 0) {
    return <p>There are no todos</p>;
  }
  
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
        />
      ))}
    </div>
  );
}

export default TodoList;