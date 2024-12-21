import './App.css'
import Button from './component/Button'
import { useState } from 'react'
function App() {
  const [color, setColor] = useState("lightblue")
  return (
    <>
      <div className="bg-gray-200 h-screen w-full" style={{ backgroundColor: color }}>
        <h1 className="text-4xl text-center">Change Background Color </h1>
        <Button text="red" changecol={() => setColor("red")} />
        <Button text="blue" changecol={() => setColor("blue")} />
        <Button text="green" changecol={() => setColor("green")} />
        <Button text="yellow" changecol={() => setColor("yellow")} />
      </div>
    </>
  );
}

export default App
