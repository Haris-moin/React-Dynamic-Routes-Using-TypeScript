import React, { useState } from "react";
import Todo from "../../models/todo";
import { AddNewTodo } from "../add-new";
import TodoItems from "../todo-items";
import "./style.css";
function Todos() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodHandler = (todoText: string) => {
    const newTodo = new Todo(todoText, "inprogress");
    setTodos((prev) => [...prev, newTodo]);
  };

  const onRemoveTodo = (id: string) => {
    setTodos((prev) => {
      return prev.filter((todo) => todo.id !== id);
    });
  };
  return (
    <div>
      <div>
        <AddNewTodo onAddTodo={addTodHandler} />
      </div>
      <ul className="todos">
        {todos.map((item) => (
          <li key={item.id} className="item">
            <TodoItems item={item} onTodoRemove={onRemoveTodo} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;
