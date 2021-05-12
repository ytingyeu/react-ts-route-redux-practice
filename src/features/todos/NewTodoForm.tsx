import React, { useState } from "react";

const NewTodoForm = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="new-todo-form">
      <input
        type="text"
        value={inputValue}
        onChange={(evt) => setInputValue(evt.target.value)}
      ></input>
      <button>Create Todo</button>
    </div>
  );
};

export default NewTodoForm;
