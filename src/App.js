import React from "react";
import Buttons from "./components/Buttons/Buttons";
import FeedBackList from "./components/FeedbackList/FeedbackList";
import "moment-timezone";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h2 className="title">Вiдгуки</h2>
      <Buttons />

      <FeedBackList />
    </div>
  );
}

export default App;
