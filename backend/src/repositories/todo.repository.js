const prisma = require("../../prisma/prisma");

async function findAll() {
	return prisma.todo.findMany();
}

async function create(data) {
	return prisma.todo.create({
		data,
	});
}

module.exports = {
	findAll,
	create,
};