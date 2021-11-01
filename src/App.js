import React from "react";
import Buttons from "./components/Buttons/Buttons";
import FeedBackList from "./components/FeedbackList/FeedbackList";
// import FormTest from "./components/FeedbackForm/FormTest";

import "./App.css";

function App() {
  // const formSubmitHendler = (dataForm) => {
  //   console.log(dataForm);
  // };

  return (
    <div className="App">
      <h2>Вiдгуки</h2>
      <Buttons />
      {/* onSubmit={formSubmitHendler} */}
      <FeedBackList />
      {/* <FormTest /> */}
    </div>
  );
}

export default App;
