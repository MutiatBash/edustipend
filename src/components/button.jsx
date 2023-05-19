import React from "react";
import "../components.css";

export default function Button(props) {
  return (
    <div>
      <button>
        <a href="#">{props.text} </a>
      </button>
    </div>
  );
}
