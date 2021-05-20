import { useEffect } from "react";
import { Action } from "redux";
import { connect, ConnectedProps } from "react-redux";
import { ThunkDispatch } from "redux-thunk";

import { TRootState } from "src/app/store";
import { removeTodo, markAsCompleted } from "./todosActions";
import { fetchTodosThunk } from "./todosThunks";

import TodoListItem from "./TodoListItem";

const mapStateToProps = (state: TRootState) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch: ThunkDispatch<TRootState, null, Action>) => ({
  onRemovePressed: (text: string) => dispatch(removeTodo({ value: text })),
  onMarkAsCompletedPressed: (text: string) =>
    dispatch(markAsCompleted({ value: text })),
  initTodoList: () => dispatch(fetchTodosThunk()),
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
  initTodoList,
}: TProps) => {
  useEffect(() => {
    initTodoList();
  }, []);

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
