import "./App.css";
import { InputField } from "./components/InputField";
import { Navbar } from "./components/Navbar";
import { useState } from "react";
import { About } from "./components/About";
import { Alert } from "./components/Alert";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [darkMode, setDarkMode] = useState("light");
  const lightTheme = {
    color: "black",
    backgroundColor: "#F3F0D7",
  };
  const darkTheme = {
    color: "white",
    backgroundColor: "#660606",
  };
  const [alert, setAlert] = useState(null);
  const showAlert = (type, heading, msg) => {
    setAlert({ type: type, heading: heading, message: msg });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const [myStyle, setmyStyle] = useState(lightTheme);
  const toggleTheme = () => {
    if (darkMode === "dark") {
      setmyStyle(lightTheme);
      setDarkMode("light");
      showAlert("success", "Success", "Light theme enabled");
    } else {
      setmyStyle(darkTheme);
      setDarkMode("dark");
      showAlert("danger", "Success", "Dark theme enabled");
    }
  };
  return (
    <Router>
      <div style={myStyle}>
        <div style={{ minHeight: "100vh" }}>
          <Navbar
            title="TextUtils"
            about_text="About us"
            darkMode={darkMode}
            myStyle={myStyle}
            toggleTheme={toggleTheme}
          />
          <Alert alert={alert} />
          <div style={myStyle}>
            <div className="container my-3">
              <Routes>
                <Route
                  path="/"
                  element={
                    <InputField myStyle={myStyle} showAlert={showAlert} />
                  }
                />
                <Route path="/about" element={<About myStyle={myStyle} />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
