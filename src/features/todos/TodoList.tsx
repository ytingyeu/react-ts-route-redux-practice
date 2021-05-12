import React from "react";
import { ITodoListItem } from "./types";
import TodoListItem from "./TodoListItem";

interface TodoListProps {
  todos: ITodoListItem[];
}

const TodoList = ({ todos }: TodoListProps) => {
  return (
    <div className="list-wrapper">
      {todos.map((todo) => (
        <TodoListItem todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
