import "./App.css";
import Card from "./components/card";
function App() {
  let myObj = {
    uname: "sagar",
    age: 19
  } 
  let myArr = ["sagar",19]
    
  
  return (
    <>
      <h1 className="bg-green-900 p-4 rounded-xl mb-5">Hello</h1>
      <Card username = "sagar" fotter = "hello"/>
      <Card username="sag" />
    </>
  );
}

export default App;
