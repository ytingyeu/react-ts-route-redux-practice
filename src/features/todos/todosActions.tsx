import { createAction } from "@reduxjs/toolkit";

export const CREATE_TODO = "CREATE_TODO";
export const createTodo = createAction<{ value: string }>(CREATE_TODO);
export type TCreateTodo = ReturnType<typeof createTodo>;

export const REMOVE_TODO = "REMOVE_TODO";
export const removeTodo = createAction<{ value: string }>(REMOVE_TODO);
export type TRemoveTodo = ReturnType<typeof removeTodo>;

export const MARK_AS_COMPLETED = "MARK_AS_COMPLETED";
export const markAsCompleted = createAction<{value: string}>(MARK_AS_COMPLETED);
export type TMarkAsCompleted = ReturnType<typeof markAsCompleted>;
