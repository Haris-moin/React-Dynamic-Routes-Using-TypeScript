import React from "react";

import "./style.css";
const TodoItems: React.FC<{
  item: { task: string; status: string; id: string };
  onTodoRemove: (id: string) => void;
}> = (props) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div>{props.item.task}</div>
      <div>
        {props.item.status}
        <i className="bi bi-trash"></i>
        <span>
          <button
            className="delete"
            onClick={props.onTodoRemove.bind(null, props.item.id)}
          >
            Delete
          </button>
        </span>
      </div>
    </div>
  );
};

export default TodoItems;
