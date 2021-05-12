import React from "react";

import { ITodoListItem } from "./types";

interface ITodoListItemProps {
  todo: ITodoListItem;
}

const TodoListItem = ({ todo }: ITodoListItemProps) => {
  return (
    <div className="todo-item-wrapper">
      <h3>{todo.text}</h3>
      <div className="todo-item-controls">
        <button>Mark as completed</button>
        <button>Remove</button>
      </div>
    </div>
  );
};

export default TodoListItem;
