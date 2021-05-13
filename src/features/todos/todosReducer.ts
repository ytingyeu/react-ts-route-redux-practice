import { AnyAction } from "redux";
import { createTodo, removeTodo } from "./todosActions";
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

  return state;
};
