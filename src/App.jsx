import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

import plusSign from "./assets/plus-solid 1.png";
import minusSign from "./assets/minus-solid 1.png";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <Header title="React Counter" />
      <main>
        <div className="counter-container">
          <button
            onClick={() => {
              setCounter(counter - 1);
            }}
          >
            <img src={minusSign} alt="minusSign" />
          </button>

          <div className="number">
            <p>{counter}</p>
          </div>

          <button
            onClick={() => {
              setCounter(counter + 1);
            }}
          >
            <img src={plusSign} alt="plusSign" />
          </button>
        </div>

        <button
          onClick={() => {
            setCounter(counter - counter);
          }}
          className="resetBtn"
        >
          Reset
        </button>
      </main>
      <Footer />
    </>
  );
}

export default App;
