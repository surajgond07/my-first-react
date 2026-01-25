import "./Todo.css";

export const Todo = () => {
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
          />

          <button type="submit" className="todo-button">
            Add Task
          </button>
        </form>
      </section>
    </section>
  );
};
