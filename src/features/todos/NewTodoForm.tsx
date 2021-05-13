import React, { useState } from "react";
import { Dispatch } from "redux";
import { connect, ConnectedProps } from "react-redux";
import { createTodo } from "./todosActions";
import { TRootState } from "src/app/store";

// interface IComponentState {}

const mapStateToProps = (state: TRootState) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onCreatePressed: (text: string) => dispatch(createTodo({ value: text })),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

type TProps = PropsFromRedux & {
  // add non-redux props here
};

const NewTodoForm = ({ todos, onCreatePressed }: TProps) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="new-todo-form">
      <input
        type="text"
        value={inputValue}
        onChange={(evt) => setInputValue(evt.target.value)}
      ></input>
      <button
        onClick={() => {
          let isDupelicate = false;

          if (todos.length !== 0) {
            isDupelicate = todos.some((todo) => todo.text === inputValue);
          }

          if (!isDupelicate) {
            onCreatePressed(inputValue);
            setInputValue("");
          }
        }}
      >
        Create Todo
      </button>
    </div>
  );
};

export default connector(NewTodoForm);
