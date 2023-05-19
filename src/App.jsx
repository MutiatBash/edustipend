import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "./components/button.jsx";
import Navbar from "./components/navbar.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="card">
        <nav>
          <Navbar />
        </nav>
      </div>
    </>
  );
}

export default App;
