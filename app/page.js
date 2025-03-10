"use client";
import { useState } from "react";
import pageStyle from "./page.module.css";
import { useRouter } from "next/navigation";
// Regular css (.css)
// CSS Module (.module.css)

export default function Home() {
  const [counter, setCounter] = useState(0);
  const router = useRouter();
  const handleIncrement = () => {
    setCounter((c) => c + 1);
  };
  const handleDecrement = () => {
    setCounter((c) => c - 1);
  };
  // navigation
  const handleNavigate = () => {
    router.push("/product/2");
  };
  return (
    <div className={pageStyle.page}>
      <h1>Lets Build the counter application!!</h1>
      <h5>{counter}</h5>
      <div className={pageStyle.flex}>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
      <button onClick={handleNavigate}>Navigate to About</button>
    </div>
  );
}
