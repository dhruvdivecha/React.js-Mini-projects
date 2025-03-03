import { useReducer, useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./Counter.css";

const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "incrememt":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    case "reset":
      return { ...state, count: 0 };
    case "incrementByAmount":
      return { ...state, count: state.count + action.payload };
    case "decrementByAmount":
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);
  const [isdarkmode, setisdarkmode] = useState(false);

  const handleAdd = () => {
    if (inputValue) {
      dispatch({ type: "incrementByAmount", payload: Number(inputValue) });
      setInputValue("");
    }
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleSubtract = () => {
    if (inputValue) {
      dispatch({ type: "decrementByAmount", payload: Number(inputValue) });
      setInputValue("");
    }
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const toggleTheme = () => {
    setisdarkmode((prevMode) => !prevMode);
  };

  return (
    <div className={`main-container ${isdarkmode ? "dark-mode" : ""}`}>
      <div className="container">
      <div className="date">27/02/2025</div>
        <div style={{ textAlign: "center", marginBottom: "1rem" }}>
          <button className="button themeButton" onClick={toggleTheme}>
            Change Theme
          </button>
        </div>
        <h2 className="counter-title">Counter: {state.count}</h2>
        <div className="input-container">
          <input
            type="number"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            ref={inputRef}
            className="input"
          />
        </div>
        <div className="button-container">
          <button className="button" onClick={() => dispatch({ type: "incrememt" })}>
            +1
          </button>
          <button className="button" onClick={() => dispatch({ type: "decrement" })}>
            -1
          </button>
          <button className="button resetButton" onClick={() => dispatch({ type: "reset" })}>
            Reset
          </button>
          <button className="button" onClick={handleAdd}>
            Add Amount
          </button>
          <button className="button" onClick={handleSubtract}>
            Subtract Amount
          </button>
        </div>
        <div className="home-link-container">
          <Link to="/" className="home-link">Home</Link>
        </div>
      </div>
    </div>
  );
};

export default Counter;
