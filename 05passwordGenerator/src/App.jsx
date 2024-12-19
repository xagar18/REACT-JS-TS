import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPLKJHGFDSAZXCBNM";
    if (numberAllowed) str += "0987654321";
    if (charAllowed) str += ";'.,[]~!@#$%^&*=-";

    for (let i = 1; i <= length; i++) {
      let char = Math.random() * str.length;
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  const passwordref = useRef(null);
  const copyPasswordToClipboard = useCallback(() => {
    passwordref.current?.select();
    passwordref.current?.setSelectionRange(0, 101);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <>
      <div>
        <h1 className="text-4xl text-center m-8 text-white">
          Password Generator
        </h1>
        <div className=" w-full max-w-md mx-auto h-64  rounded-lg px-4  my-8 text-orange-500 bg-gray-700">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 rounded-lg mt-10"
            placeholder="password"
            readOnly
            ref={passwordref}
          />
          <button className="bg-blue-900" onClick={copyPasswordToClipboard}>
            copy
          </button>

          <div className="flex text-sm gap-x-2 mt-8">
            <div className="flex items-center gap-x-1 ">
              <input
                type="range"
                // min={6}
                // max={100}
                value={length}
                className="cursor-pointer"
                onChange={(e) => {
                  setLength(e.target.value);
                }}
              />
              <label> length: {length}</label>
            </div>
            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                defaultChecked={numberAllowed}
                id="numberInput"
                onChange={() => {
                  setNumberAllowed((prev) => !prev);
                }}
              />
              <label>Numbers</label>
            </div>
            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                defaultChecked={charAllowed}
                id="charInput"
                onChange={() => {
                  setCharAllowed((prev) => !prev);
                }}
              />
              <label>Characters</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
