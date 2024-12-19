import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

function MyApp() {
  return (
    <div>
      <h1>custom app</h1>
      <h2>new page</h2>
    </div>
  );
}
const anotherElem = (
  <a href="https://google.com" target="_blank">
    Click here
  </a>
);

const anoUser = "demo"
const Reactelem = React.createElement(
  "a",
  {href: "https://google.com",
    target: "_blank"
  },
  "click here to visit google",
  anoUser
)


createRoot(document.getElementById("root")).render(
  // anotherElem
//<MyApp/>
 Reactelem
//<App/>

);
