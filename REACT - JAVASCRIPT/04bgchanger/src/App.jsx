import { useState } from "react";
import "./App.css";
import Button from "./components/Button";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-md bg-white px-3 py-2 rounded-xl">
            <Button
              butname="red"
              txtbg="red"
              changecolor={() => setColor("red")}
            />
            <br />
            <Button
              butname="Green"
              txtbg="green"
              changecolor={() => setColor("green")}
            />
            <br />
            <Button
              butname="Blue"
              txtbg="blue"
              changecolor={() => setColor("blue")}
            />
            <br />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
