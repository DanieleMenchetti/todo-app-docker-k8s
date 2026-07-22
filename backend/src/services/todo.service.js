const todoRepository = require("../repositories/todo.repository");

async function getTodos() {
	return todoRepository.findAll();
}

async function createTodo(todo) {
	return todoRepository.create(todo);
}

module.exports = {
	getTodos,
	createTodo,
};