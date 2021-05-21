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
  isFetching: state.isFetching,
  requestFailure: state.requestFailure,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<TRootState, null, Action>
) => ({
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
  isFetching,
  requestFailure,
  onRemovePressed,
  onMarkAsCompletedPressed,
  initTodoList,
}: TProps) => {
  useEffect(() => {
    initTodoList();
  }, [initTodoList]);

  if (isFetching) {
    return <h2>Now Loading...</h2>;
  }

  if (requestFailure.isFailure) {
    if (requestFailure.status === 404) {
      return <h2>No todo found.</h2>;
    } else if (requestFailure.status !== undefined) {
      return <h2>{`${requestFailure.status} | ${requestFailure.message}`}</h2>;
    } else {
      return <h2>{requestFailure.message}</h2>;
    }
  } 

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
