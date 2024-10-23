import { useState } from "react";

export default function Count() {
  const [counter, setCount] = useState(0);

  const increment = () => {
    const newCount = counter + 1;
    setCount(newCount);
  };

  const decrement = () => {
    const newCount = counter - 1;
    setCount(newCount);
  };

  return (
    <div style={{ border: "2px solid green" }}>
      <h2>Count Number</h2>
      <h3>Value : {counter}</h3>
      <button style={{ margin: "20px" }} onClick={increment}>
        Increment
      </button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}
