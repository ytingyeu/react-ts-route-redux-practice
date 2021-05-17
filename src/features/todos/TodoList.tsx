import TodoListItem from "./TodoListItem";
import { Dispatch } from "redux";
import { TRootState } from "src/app/store";
import { removeTodo, markAsCompleted } from "./todosActions";
import { connect, ConnectedProps } from "react-redux";

const mapStateToProps = (state: TRootState) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onRemovePressed: (text: string) => dispatch(removeTodo({ value: text })),
  onMarkAsCompletedPressed: (text: string) => dispatch(markAsCompleted({ value: text })),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

type TProps = PropsFromRedux & {
  // add non-redux props here
};

const TodoList = ({
  todos,
  onRemovePressed,
  onMarkAsCompletedPressed,
}: TProps) => {
  return (
    <div className="list-wrapper">
      {todos.map((todo) => (
        <TodoListItem
          key={todo.text}
          todo={todo}
          onRemovePressed={onRemovePressed}
          onMarkAsCompletedPressed={onMarkAsCompletedPressed}
        />
      ))}
    </div>
  );
};

export default connector(TodoList);
