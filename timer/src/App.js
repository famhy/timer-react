import React from "react";
import MainTime from "./mainTimer.js";
import "./App.css";
import "./bootstrap.min.css";

let timeSec = 50000;

function App() {
  return (
    <div className="App d-flex justify-content-center">
      <div className=" d-flex flex-row">
        <MainTime timeSec={timeSec} />
      </div>
    </div>
  );
}

export default App;
