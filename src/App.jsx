import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Count from "./Count";
import Users from "./Users";

function App() {
  function handleClick() {
    alert("Press Handle Clicked");
  }
  const handleClick2 = () => {
    alert("Press Handle Clicked");
  };

  const addToFive = (num) => {
    alert(num + 5);
  };
  return (
    <>
      <h1>Vite + React</h1>
      <Users></Users>
      <Count></Count>
      {/* onClick Handle Method-1 with function*/}
      <button onClick={handleClick}>Click</button>
      {/* onClick Handle Method-2 with arrow function*/}
      <button onClick={handleClick2}>Click2</button>
      {/* onClick Handle Method-3 without function */}
      <button onClick={() => alert("3rd button clicked")}>Click3</button>
      {/* onClick Handle Method-2 with arrow function, when we pass parameter we need to pass it through a arrow function */}
      <button onClick={() => addToFive(3)}>Click3</button>
    </>
  );
}

export default App;
