const express = require("express");
const cors = require("cors");

const todoRoutes = require("./routes/todo.routes");
const healthRoutes = require("./routes/health.routes");

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/todos", todoRoutes);
app.use("/api/health", healthRoutes);

module.exports = app;