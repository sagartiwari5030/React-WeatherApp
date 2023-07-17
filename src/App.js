import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        <a href="https://sagartiwari5030.github.io/Portfolio/">
          Download Source code
        </a>{" "}
        | Developed by{" "}
        <a target="blank" href="https://sagartiwari5030.github.io/Portfolio/">
          Sagar Tiwari
        </a>{" "}
           </div>
        
     
    </React.Fragment>
  );
}

export default App;
