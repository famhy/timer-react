import React from "react";
import Time from "./Timer.js";
import "./App.css";
import "./bootstrap.min.css";
import { tsPropertySignature } from "@babel/types";

function MainTimer(props) {
  return (
    <div className="App d-flex justify-content-center">
      <div className=" d-flex flex-row">
        <Time Name="Hour" timeSec={props.timeSec} />
        <span>:</span>
        <Time Name="Minute" timeSec={props.timeSec} />
        <span>:</span>
        <Time Name="Second" timeSec={props.timeSec} />
      </div>
    </div>
  );
}

export default MainTimer;
