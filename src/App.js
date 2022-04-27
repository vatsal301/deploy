import React, { useState } from "react";
import './App.css';
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alart";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042745";
      showAlert("Dark mode has been enabled", "success");
      document.title = "Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "Light Mode";
    }
  };
  return (
    <>
        <Navbar logo="Vatsal Gajjar" value="I'm Vatsal Gajjar"  mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />
  </>
  );
}

export default App;
