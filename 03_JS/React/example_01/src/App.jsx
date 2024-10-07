import { useState } from "react";
import "./App.css";
import Greeting from "./components/Greeting";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Guapos!");

  const handlerClickCount = () => {
    setCount(count + 1);
  };

  return (
    <>
      <Greeting
        name={name}
        onClick={() => {
          alert("Aush!!!!");
        }}
      />
      <button onClick={handlerClickCount}>Click</button>
      <p>Count {count}</p>
    </>
  );
}

export default App;
