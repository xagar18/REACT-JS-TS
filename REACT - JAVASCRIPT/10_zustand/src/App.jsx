import "./App.css";
import Button from "./components/Button";
import { useCounterStore } from "./zustand/counterStore";



function App() {
  const counter = useCounterStore((state) => state.counter);
  const increaseCounter = useCounterStore((state) => state.increaseCounter);
  const decreaseCounter = useCounterStore((state) => state.decreaseCounter);
  const resetCounter = useCounterStore((state) => state.resetCounter);
  return (
    <>
      <div className="h-screen w-full gap-10 flex flex-col justify-center items-center ">
        <div>Counter : {counter}</div>
        <div className="flex gap-2">
          <Button value={"+"} func={increaseCounter} />
          <Button value={"-"} func={counter> 0? decreaseCounter : null} />
          <Button value={"Reset"} func={resetCounter} />
        </div>
      </div>
    </>
  );
}

export default App;
