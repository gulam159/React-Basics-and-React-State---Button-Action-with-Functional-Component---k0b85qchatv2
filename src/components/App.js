import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
  const showText=()=>{
    const para = document.createElement("p");
    para.setAttribute('id', 'click');
    para.innerText = "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy"
    document.body.appendChild(para);
  };
  
  return (
    <div id="main">
    <button id='click' onClick={showText}> Show Text </button>
    </div>
  );
}


export default App;




//   const[state, setState] = useState('');
//   const showText=()=>{
//     setState("Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy");
//   };
//   return (
//     <div id="main">
//       <p id='click'>{state}</p>
//     <button id='click' onClick={showText}> Show Text </button>
//     </div>
//   );
  
