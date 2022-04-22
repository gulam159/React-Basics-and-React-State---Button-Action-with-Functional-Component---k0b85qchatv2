import React, { Component, useState } from "react";
import "./../styles/App.css";

function App() {
  const [state, setState] = useState("");
  const handleClick = () => {
    setState(
      <p id="para">
        Hello, I've learnt to use the full-stack evaluation tool. This makes me
        so happy
      </p>
    );
  };
  return (
    <div id="main">
      <button id="click" onClick={handleClick}>
        Add
      </button>
      {state}
    </div>
  );
}

export default App;
