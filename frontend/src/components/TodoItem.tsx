import type { Todo } from "../types/Todo";

type Props = {
  todo: Todo;
};

function TodoItem({ todo }: Props) {
  return (
    <div>
      {todo.title}
    </div>
  );
}

export default TodoItem;