import './App.css';
import React, { useState } from 'react'
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
import { Routes, Route } from "react-router-dom";
import About from "./components/About";


function App() {
  const [mode, setMode] = useState("light");
  const modeToggle = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      document.body.style.color = "white";
      showAlert("Dark mode has been enabled", "success");
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light mode has been enabled", "success");
    }
  }
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
      setAlert({
          msg: message,
          type: "success"
      });
  }
  setTimeout(() => {
    setAlert(null);
  }, 2000);
  return (
  <>
    <Navbar title="TextUtils" mode={mode} modeToggle={modeToggle} />
    <Alert alert={alert} />

    <Routes>
      <Route path="/" element={<Textarea mode={mode} modeToggle={modeToggle} />}/>

      <Route path="/about" element={<About mode={mode} />}/>
    </Routes>
  </>
);
}

export default App;
