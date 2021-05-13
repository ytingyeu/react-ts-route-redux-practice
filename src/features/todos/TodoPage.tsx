import React from "react";

import NewTodoForm from "./NewTodoForm";
import TodoList from "./TodoList";

const TodoPage = () => {
  return (
    <div className="todo-page">
      <NewTodoForm />
      <TodoList />
    </div>
  );
};

export default TodoPage;
