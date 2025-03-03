import React from "react";
import useTodoLogic from "./LogicTodo";
import "./Todo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Todo = () => {
  const { todos, handleChange, handleKeyDown, handleDelete, textAreaRefs } = useTodoLogic();

  return (
    <div className="todo-container">
      {todos.map((todo, index) => (
        <div key={index} className="todo-item">
          <textarea
            ref={(el) => (textAreaRefs.current[index] = el)}
            value={todo}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            placeholder="Enter todo item"
          />
          <button 
            className="delete-button" 
            onClick={() => handleDelete(index)}
            title="Delete todo"
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      ))}
      <div className="home-link-container">
          <Link to="/" className="home-link">Home</Link>
      </div>
    </div>
  );
};

export default Todo;
