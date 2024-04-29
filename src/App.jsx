import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import messages from "./messages";
import EightBall from "./components/EightBall";
import "./App.css";

function App() {
  return (
    <>
      <EightBall messages={messages} />
    </>
  );
}

export default App;
