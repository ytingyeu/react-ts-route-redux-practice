import { createReducer } from "@reduxjs/toolkit";

import {
  createTodo,
  removeTodo,
  markAsCompleted,
  fetchTodosSuccess
} from "./todosActions";

import { ITodoListItem } from "./todosTypes";

const initialState: ITodoListItem[] = [];

export const todosReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(createTodo, (state, action) => {
      const text: string = action.payload.value;
      const newTodo: ITodoListItem = {
        text: text,
        isCompleted: false,
      };
      return state.concat(newTodo);
    })
    .addCase(removeTodo, (state, action) => {
      const text = action.payload.value;
      return state.filter((todo) => todo.text !== text);
    })
    .addCase(markAsCompleted, (state, action) => {
      const text = action.payload.value;

      return state.map((todo) => {
        if (todo.text === text) {
          return { ...todo, isCompleted: true };
        }

        return todo;
      });
    })
    .addCase(fetchTodosSuccess, (_state, action) => {
      const todos = action.payload;
      return todos;
    })
    .addDefaultCase((state, _action) => state);
});
