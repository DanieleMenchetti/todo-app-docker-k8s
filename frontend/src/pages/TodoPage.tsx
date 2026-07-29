import { useEffect, useState } from "react";
import { getTodos, createTodo } from "../api/todoApi";
import type { Todo } from "../types/Todo";
import TodoList from "../components/TodoList";
import TodoForm from "../components/TodoForm";

function TodoPage() {
	const [todos, setTodos] = useState<Todo[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);
	
	async function handleCreate(title:string){
		const newTodo = await createTodo(title);

		setTodos([
			...todos,
			newTodo
		]);
	}

	useEffect(() => {

		async function loadTodos(){

			setLoading(true);
			try {
				const data = await getTodos();
				setTodos(data);
			} catch (ex) {
				setError("Error while loading todos: "+ex)
			} finally {
				setLoading(false);
			}

		}

		loadTodos();

	}, []);

	if (error) {
		return <p>{error}</p>;
	}

	if (loading) {
		return <p>Loading...</p>;
	}

	return (
		<div>
		<h1>Todo List</h1>
			<TodoForm onCreate={handleCreate}/>
			<TodoList todos={todos}/>
		</div>
	);
}

export default TodoPage;