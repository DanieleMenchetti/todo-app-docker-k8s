import apiClient from "./apiClient";
import type { Todo } from "../types/Todo";

export async function getTodos(): Promise<Todo[]> {
  const response = await apiClient.get("/todos");

  return response.data;
}

export async function createTodo(title: string): Promise<Todo> {
  const response = await apiClient.post("/todos", {
    title,
  });

  return response.data;
}