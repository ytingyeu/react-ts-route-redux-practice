import { AnyAction } from "redux";
import { createTodo, removeTodo, markAsCompleted } from "./todosActions";
import { ITodoListItem } from "./todosTypes";

const initialState: ITodoListItem[] = [];

export const todosReducer = (state = initialState, action: AnyAction) => {
  if (createTodo.match(action)) {
    const text: string = action.payload.value;
    const newTodo: ITodoListItem = {
      text: text,
      isCompleted: false,
    };
    return state.concat(newTodo);
  }

  if (removeTodo.match(action)) {
    const text = action.payload.value;
    return state.filter((todo) => todo.text !== text);
  }

  if (markAsCompleted.match(action)) {
    const text = action.payload.value;

    return state.map((todo) => {
      if (todo.text === text) {
        return { ...todo, isCompleted: true };
      }

      return todo;
    });
  }

  return state;
};
