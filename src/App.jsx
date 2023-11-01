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
        <div id="counter-container">
          <div className="btnContainer">
            {counter > 0 && (
              <button
                onClick={() => {
                  setCounter(counter - 1);
                }}
              >
                <img src={minusSign} alt="minusSign" />
              </button>
            )}
          </div>

          <div id="number">
            <p>{counter}</p>
          </div>

          <div className="btnContainer">
            {counter < 10 && (
              <button
                onClick={() => {
                  setCounter(counter + 1);
                }}
              >
                <img src={plusSign} alt="plusSign" />
              </button>
            )}
          </div>
        </div>

        <button
          onClick={() => {
            setCounter(0);
          }}
          id="resetBtn"
        >
          Reset
        </button>
      </main>
      <Footer />
    </>
  );
}

export default App;
