import React from "react";
import "../components.css";
import Button from "../components/button.jsx";

export default function Navbar() {
  return (
    <div className="nav">
      <ul>
        <li>Contact us </li>
      </ul>
      <Button text="Signup" />
    </div>
  );
}
