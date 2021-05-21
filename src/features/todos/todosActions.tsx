import { createAction } from "@reduxjs/toolkit";
import { ITodoListItem } from "./todosTypes";

export const CREATE_TODO = "CREATE_TODO";
export const createTodo = createAction<{ value: string }>(CREATE_TODO);
export type TCreateTodo = ReturnType<typeof createTodo>;

export const REMOVE_TODO = "REMOVE_TODO";
export const removeTodo = createAction<{ value: string }>(REMOVE_TODO);
export type TRemoveTodo = ReturnType<typeof removeTodo>;

export const MARK_AS_COMPLETED = "MARK_AS_COMPLETED";
export const markAsCompleted =
  createAction<{ value: string }>(MARK_AS_COMPLETED);
export type TMarkAsCompleted = ReturnType<typeof markAsCompleted>;

export const FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS";
export const fetchTodosSuccess =
  createAction<ITodoListItem[]>(FETCH_TODOS_SUCCESS);
export type TFetchTodosSucess = ReturnType<typeof fetchTodosSuccess>;

export const FETCH_TODOS_FAILUARE = "FETCH_TODOS_FAILUARE";
export const fetchTodosFailuare =
  createAction<string | { status: number; statusText: string }>(
    FETCH_TODOS_FAILUARE
  );
export type TFetchTodosFailuare = ReturnType<typeof fetchTodosFailuare>;
