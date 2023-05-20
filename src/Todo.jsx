import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, toggleTodo } from "./redux/TodoSlice";
import "./todo.css";

const Todo = () => {
  const [todoText, setTodoText] = useState("");
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.todos);

  const handleAddTodo = () => {
    if (todoText.trim() !== "") {
      dispatch(
        addTodo({
          id: Date.now(),
          text: todoText,
          completed: false,
        })
      );
      setTodoText("");
    }
  };

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id));
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };
  return (
    <div className="todo-container">
      <h1>Todos</h1>
      <div className="add-todo">
        <input
          type="text"
          placeholder="Enter a todo"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
        />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`todo-item ${todo.completed ? "completed" : ""}`}
          >
            <h3 className="todo-text" onClick={() => handleToggleTodo(todo.id)}>
              {todo.text}
            </h3>
            <div>
              <button
                className={`todoToggle ${
                  todo.completed ? "incomplete" : "complete"
                }`}
                onClick={() => handleToggleTodo(todo.id)}
              >
                {todo.completed ? "Undo" : "Complete"}
              </button>
              <button
                className="deleteTodo"
                onClick={() => handleDeleteTodo(todo.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
