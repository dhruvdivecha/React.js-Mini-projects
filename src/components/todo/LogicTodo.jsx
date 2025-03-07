import { useState, useEffect, useRef } from "react";

const LogicTodo = () => {
  
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      try {
        return JSON.parse(savedTodos)
      } catch (e) {
        console.error("Error parsing todo", e);

      }
    }
    return [""]
  })

  const textAreaRefs = useRef([]);

  const handleChange = (e, index) => {
    const newTodos = [...todos];
    newTodos[index] = e.targe.value;
    setTodos(newTodos);
    autoResize(e.target);
  }

  const handleKeyDown = (e, index) => {
    if(e.key === "Enter" && !e.shiftkey) {
      e.preventDefault();
      if (todos[index].trim() !== "") {
        const newTodos = [...todos];
        newTodos.splice(index + 1, 0, "");
        setTodos(newTodos);
        setTimeout(() => textAreaRefs.current[index+1]?.focus(), 0)
      }
    }
  }

  const handleDelete = (index) => {
    if(todos.length > 1)  {
      const newTodos = todos.filter((_, i) => i !== index);
      setTodos(newTodos);
    } else {
      setTodos([""]);
    }
  }

  const autoResize = (textarea) => {
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scroll.height}px`;
  }

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

export default LogicTodo