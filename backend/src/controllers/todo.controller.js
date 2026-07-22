const todoService = require("../services/todo.service");

async function getTodos(req, res) {
	const todos = await todoService.getTodos();

	res.json(todos);
}

async function createTodo(req, res) {
	const todo = await todoService.createTodo(req.body);

	res.status(201).json(todo);
}

module.exports = {
	getTodos,
	createTodo,
};