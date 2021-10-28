import Buttons from "./components/Buttons/Buttons";
import FeedBackList from "./components/FeedbackList/FeedbackList";
import FeedbackForm from "./components/FeedbackForm/FeedbackForm";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h2>Вiдгуки</h2>
      <Buttons />
      <FeedbackForm />
      <FeedBackList />
    </div>
  );
}

export default App;
