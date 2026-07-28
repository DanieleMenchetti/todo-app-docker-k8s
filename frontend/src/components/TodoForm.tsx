import { useState } from "react";

type Props = {
  onCreate: (title: string) => void;
};

function TodoForm({ onCreate }: Props) {
  const [title, setTitle] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!title.trim()) return;

    onCreate(title);

    setTitle("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={e => setTitle(e.target.value)} />

      <button type="submit">Add</button>
    </form>
  );
}

export default TodoForm;
