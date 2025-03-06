"use client";
import { useState } from "react";
import pageStyle from "./page.module.css";
// Regular css (.css)
// CSS Module (.module.css)

export default function Home() {
  const [counter, setCounter] = useState(0);
  const handleIncrement = () => {
    setCounter((c) => c + 1);
  };
  const handleDecrement = () => {
    setCounter((c) => c - 1);
  };
  return (
    <div className={pageStyle.page}>
      <h1>Lets Build the counter application!!</h1>
      <h5>{counter}</h5>
      <div className={pageStyle.flex}>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
    </div>
  );
}
