import "./App.css";
import React, { useState } from "react";

function App() {
  const [number, setNumber] = useState(0);
  const [darkMode, setDarkMode] = useState("false");

  // const displayColor=()=>{}

  return (
    <>
      <div
        className={`min-h-screen flex items-center justify-center transition-all duration-300 ${
          darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
        }`}
      >
        <div className=" h-1/3 w-1/3 border-2 rounded-2xl gap-3  flex flex-col bg-green-400">
          <h1 style={{ color: "red", textAlign: "center", fontSize: "25px" }}>
            Counter Down pro
          </h1>
          <h2>{number}</h2>
          <input
            type="text"
            autoFocus
            placeholder="Press Number"
            value={number}
            style={{ backgroundColor: "white", padding: "4px", color: "black" }}
          />
          <button
            className=" border-2 border-amber-700 bg-blue-500 rounded "
            onClick={() => setNumber(number + 1)}
          >
            Plus
          </button>
          <button
            className=" border-2 border-amber-700 bg-blue-500 rounded "
            onClick={() => setNumber(number - 1)}
          >
            Minus
          </button>
          <button
            className="  border-2 border-amber-700 bg-blue-500 rounded "
            onClick={() => setNumber(0)}
          >
            Reset
          </button>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="w-full py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white transition"
          >
            {darkMode ? "Light Mode ☀️" : "Dark Mode 🌙"}
          </button>
          {/* </button> <button onClick={displayColor}>Change Theme</button> */}
        </div>
      </div>
    </>
  );
}

export default App;
