import { useEffect, useState } from "react";
import iconCheck from "../../public/images/icon-check.svg";
import iconCross from "../../public/images/icon-cross.svg";
const TodoSection = () => {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || [
      { id: 1, text: "Complete online Javascript course", completed: true },
      { id: 2, text: "Jog around the park 3x", completed: false },
    ]
  );
  const [inputValue, setInputValue] = useState("");
  const [filter, setFilter] = useState("All");

  const toggleTodoCompletion = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const clearCompletedTodos = () => {
    setTodos((prevTodos) => prevTodos.filter((todo) => !todo.completed));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim()) {
      addTodo(inputValue);
      setInputValue("");
    }
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "All") {
      return true;
    } else if (filter === "Active") {
      return !todo.completed;
    } else if (filter === "Completed") {
      return todo.completed;
    }
  });

  const itemsLeftCount = todos.filter((todo) => !todo.completed).length;

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="todo-container">
      <form onSubmit={handleFormSubmit}>
        <div className="circle"></div>
        <input
          type="text"
          placeholder="Create a new todo..."
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
      </form>
      <article>
        <ul className="todo-list">
          {filteredTodos.map((todo) => (
            <li
              key={todo.id}
              className={`todo-item ${
                todo.completed ? "todo-item-strike" : undefined
              }`}
              onClick={() => toggleTodoCompletion(todo.id)}
            >
              <div
                className={`checkbox ${
                  todo.completed ? "checkbox-image" : undefined
                }`}
              >
                {todo.completed && (
                  <img src={iconCheck} className="checkbox-image" />
                )}
              </div>
              <div className="text-area">
                <span>{todo.text}</span>
                <div
                  className="delete-icon"
                  onClick={() => deleteTodo(todo.id)}
                >
                  <img src={iconCross} />
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="info">
          <p className="items-left">
            <span>{itemsLeftCount}</span> items left
          </p>
          <ul>
            <li
              className={filter === "All" ? "active-filter" : ""}
              onClick={() => handleFilterChange("All")}
            >
              All
            </li>
            <li
              className={filter === "Active" ? "active-filter" : ""}
              onClick={() => handleFilterChange("Active")}
            >
              Active
            </li>
            <li
              className={filter === "Completed" ? "active-filter" : ""}
              onClick={() => handleFilterChange("Completed")}
            >
              Completed
            </li>
          </ul>
          {todos.some((todo) => todo.completed) && (
            <p className="clear-completed" onClick={clearCompletedTodos}>
              Clear Completed
            </p>
          )}
        </div>
      </article>
    </div>
  );
};

export default TodoSection;
