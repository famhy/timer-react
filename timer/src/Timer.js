import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./bootstrap.min.css";
function time(timeSec) {
  // ((timeSec%3600)%60)==0?this.hour="0"+((timeSec%3600)%60).toString():this.hour=((timeSec%3600)%60).toString()

    this.hour = parseInt(timeSec / 3600).toString().padStart(2, '0')
    this.minute = parseInt((timeSec % 3600) / 60).toString().padStart(2, '0')


this.seconde = ((timeSec % 3600) % 60).toString().padStart(2, '0')
}
function Time(props) {
  var timesc = new time(parseInt(props.timeSec));
  return (
    <div className="Time d-flex flex-column">
      <p className="time-section">
        {props.Name === "Hour"
          ? timesc.hour
          : props.Name === "Minute"
          ? timesc.minute
          : timesc.seconde
          }
      </p>
      <p className="time-name">{props.Name}</p>
    </div>
  );
}

export default Time;
