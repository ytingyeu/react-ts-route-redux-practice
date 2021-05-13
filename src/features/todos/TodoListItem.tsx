import React from "react";
import { ITodoListItem } from "./types";
import { TRemoveTodo } from "./actions";

interface ITodoListItemProps {
  todo: ITodoListItem;
  onRemovePressed: (text: string) => TRemoveTodo;
}

const TodoListItem = ({ todo, onRemovePressed }: ITodoListItemProps) => {
  console.log(typeof onRemovePressed);

  return (
    <div className="todo-item-wrapper">
      <h3>{todo.text}</h3>
      <div className="todo-item-controls">
        <button>Mark as completed</button>
        <button onClick={() => onRemovePressed(todo.text)}>Remove</button>
      </div>
    </div>
  );
};

export default TodoListItem;
