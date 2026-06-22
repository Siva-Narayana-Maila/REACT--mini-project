import './App.css';
import React, { useState } from 'react'

import Navbar from './components/Navbar';
import Textarea from './components/Textarea';


function App() {
  const [mode, setMode] = useState("light");
  const modeToggle = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      document.body.style.color = "white";
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  }
  return (
    <>
      <Navbar title="TextUtils" mode={mode} modeToggle={modeToggle} />
      <Textarea mode={mode} modeToggle={modeToggle} />
    </>
  );
}

export default App;
