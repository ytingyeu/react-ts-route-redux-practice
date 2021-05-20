import {
  createTodo,
  removeTodo,
  markAsCompleted,
  fetchTodosSuccess,
  fetchTodosFailuare,
} from "./todosActions";
import { createReducer } from "@reduxjs/toolkit";

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
    .addCase(fetchTodosFailuare, (_state, action) => {
      const message = action.payload;
      console.error(message);
    })
    .addDefaultCase((state, _action) => state);
});

/*----- without createReducer() -----*/
// export const todosReducer = (
//   state = initialState,
//   action: AnyAction
// ) => {
//   if (createTodo.match(action)) {
//     const text: string = action.payload.value;
//     const newTodo: ITodoListItem = {
//       text: text,
//       isCompleted: false,
//     };
//     return state.concat(newTodo);
//   }

//   if (removeTodo.match(action)) {
//     const text = action.payload.value;
//     return state.filter((todo) => todo.text !== text);
//   }

//   if (markAsCompleted.match(action)) {
//     const text = action.payload.value;

//     return state.map((todo) => {
//       if (todo.text === text) {
//         return { ...todo, isCompleted: true };
//       }

//       return todo;
//     });
//   }

//   if (fetchTodosSuccess.match(action)) {
//     const todos = action.payload.value;
//     return todos;
//   }

//   if (fetchTodosFailuare.match(action)) {
//     const message = action.payload.value;
//     console.log(message);
//   }

//   return state;
// };
