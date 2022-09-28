import React, { useRef } from "react";
import "./style.css";

export const AddNewTodo: React.FC<{
  onAddTodo: (text: string) => void;
}> = (props) => {
  let todoTextInputRef = useRef<HTMLInputElement>(null);
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = todoTextInputRef.current!.value;

    if (enteredText?.trim().length === 0) return;
    props.onAddTodo(enteredText);
    todoTextInputRef.current!.value = "";
  };
  return (
    <div style={{ margin: "20px" }}>
      <form onSubmit={submitHandler} className="form">
        <div>
          <label style={{ marginRight: "20px" }} htmlFor="text">
            Todo Text
          </label>
          <input type="text" id="text" ref={todoTextInputRef} />
        </div>
        <div>
          <button style={{ marginTop: "20px" }}>Add Todo</button>
        </div>
      </form>
    </div>
  );
};
