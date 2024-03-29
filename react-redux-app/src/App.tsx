import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

type Props = {
  value: any;
  onIncrement: () => void;
  onDecrement: () => void;
};

function App({ value, onIncrement, onDecrement }: Props) {
  const [todoValue, setTodoValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoValue(e.target.value);
  };

  const addTodo = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setTodoValue("");
  };

  return (
    <p>
      {/* Clicked: {value} times  */}
      <button onClick={onIncrement}>+</button>{" "}
      <button onClick={onDecrement}>-</button>
      <form onSubmit={addTodo}>
        <input type="text" value={todoValue} onChange={handleChange} />
        <input type="submit" />
      </form>
    </p>
  );
}

export default App;
