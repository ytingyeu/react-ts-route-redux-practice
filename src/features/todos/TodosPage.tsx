import NewTodoForm from "./NewTodoForm";
import TodoList from "./TodoList";

const TodosPage = () => {
  return (
    <div className="todo-page">
      <NewTodoForm />
      <TodoList />
    </div>
  );
};

export default TodosPage;
