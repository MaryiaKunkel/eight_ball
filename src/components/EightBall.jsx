import React, { useState } from "react";
import messages from "../messages";
import "../App.css";

const EightBall = (props) => {
  const randomNum = Math.floor(Math.random() * messages.length);
  const restart = () => {
    setMessage("Think of a Question");
    setColor("black");
  };

  const [message, setMessage] = React.useState("Think of a Question");
  const [color, setColor] = React.useState("black");

  function changeOnClick() {
    let message = messages[randomNum].msg;
    setMessage(message);

    for (let i = 0; i < messages.length; i++) {
      let msg = messages[i];
      if (messages[i].msg === message) {
        setColor(msg.color);
      }
    }
  }

  return (
    <>
      <div
        className="firstMessage"
        style={{ backgroundColor: color }}
        onClick={changeOnClick}
      >
        <h4>{message}</h4>
      </div>
      <button onClick={restart}>Reset</button>
    </>
  );
};

export default EightBall;
