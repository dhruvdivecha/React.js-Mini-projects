import { useState, useRef, useEffect } from "react";

const useTodoLogic = () => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      try {
        return JSON.parse(savedTodos);
      } catch (e) {
        console.error("Error parsing todos", e);
      }
    }
    return [""];
  });
  
  const textAreaRefs = useRef([]);

  const handleChange = (e, index) => {
    const newTodos = [...todos];
    newTodos[index] = e.target.value;
    setTodos(newTodos);
    autoResize(e.target);
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (todos[index].trim() !== "") {
        const newTodos = [...todos];
        newTodos.splice(index + 1, 0, "");
        setTodos(newTodos);
        setTimeout(() => textAreaRefs.current[index + 1]?.focus(), 0);
      }
    }
  };

  const handleDelete = (index) => {
    if (todos.length > 1) {
      const newTodos = todos.filter((_, i) => i !== index);
      setTodos(newTodos);
    } else {
      setTodos([""]);
    }
  };

  const autoResize = (textarea) => {
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  useEffect(() => {
    textAreaRefs.current.forEach((ref) => {
      if (ref) autoResize(ref);
    });
  }, [todos]);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return { todos, handleChange, handleKeyDown, handleDelete, textAreaRefs };
};

export default useTodoLogic;
