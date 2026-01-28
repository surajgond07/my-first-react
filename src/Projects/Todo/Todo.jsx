import { useState } from "react";
import "./Todo.css";

export const Todo = () => {
  const[inputValue, setInputValue] = useState("");

  const handleInputChange = (value) =>{
setInputValue(value);
  }
  return (
    <section className="todo-container">
      <header>
        <h1>Todo List</h1>
      </header>

      <section className="form">
        <form>
          <input
            type="text"
            className="todo-input"
            autoComplete="off"
            placeholder="Add a task..."
            value = {inputValue}
            onChange= {(Event) => handleInputChange(Event.target.value)}
          />

          <button type="submit" className="todo-button">
            Add Task
          </button>
        </form>
      </section>
    </section>
  );
};
