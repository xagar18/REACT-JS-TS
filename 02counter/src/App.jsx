import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15); //setCounter(fn) will control counter

  // let counter = 5;
  const incValue = () => {
    counter = counter + 1;
    setCounter(counter);
  };
  const decValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      document.getElementById("rembtn").innerText = "limit reached";
    }
  };

  return (
    <>
      <h1>Test</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={incValue}>Inc value</button> <br /> <br />
      <button id="rembtn" onClick={decValue}>
        Dec Value
      </button>
    </>
  );
}

export default App;
