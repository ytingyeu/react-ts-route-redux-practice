import { ITodoListItem } from "./todosTypes";
import { TRemoveTodo, TMarkAsCompleted } from "./todosActions";

interface ITodoListItemProps {
  todo: ITodoListItem;
  onRemovePressed: (text: string) => TRemoveTodo;
  onMarkAsCompletedPressed: (text: string) => TMarkAsCompleted;
}

const TodoListItem = ({
  todo,
  onRemovePressed,
  onMarkAsCompletedPressed,
}: ITodoListItemProps) => {

  return (
    <div className="todo-item-wrapper">
      <h3>{todo.text}</h3>
      <div className="todo-item-controls">
        {todo.isCompleted ? null : (
          <button onClick={() => onMarkAsCompletedPressed(todo.text)}>
            Mark as completed
          </button>
        )}
        <button onClick={() => onRemovePressed(todo.text)}>Remove</button>
      </div>
    </div>
  );
};

export default TodoListItem;
