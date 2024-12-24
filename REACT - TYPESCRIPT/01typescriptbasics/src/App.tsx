import "./App.css";
import Button from "./component/Button";
import { useState } from "react";
function App() {
  const [color, setColor] = useState("gray");
  
   


  return (
    <>
      <div
        className="bg-gray-900 h-screen w-full"
        style={{ backgroundColor: color }}
      >
        <div>
          <h1 className="text-4xl text-center ">
            Change Background Color
          </h1>
        </div>
        <div className="flex justify-center h-[900px] items-end">
          <Button text="red" changecol={() => setColor("red")} />
          <Button text="blue" changecol={() => setColor("blue")} />
          <Button text="green" changecol={() => setColor("green")} />
          <Button text="yellow" changecol={() => setColor("yellow")} />
          <Button text="pink" changecol={() => setColor("pink")} />
        </div>
      </div>
    </>
  );
}

export default App;
