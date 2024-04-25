import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("#333");
  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 rounded-3xl px-2 py-2 bg-white shadow-lg">
            <button
            onClick={() => setColor("beige")}
              className="outline-none px-5 py-1 rounded-full shadow-lg text-black"
              style={{ backgroundColor: "beige" }}>
              beige
            </button>
            <button
            onClick={() => setColor("Green")}
              className="outline-none px-5 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "Green" }}>
              Green
            </button>
            <button
            onClick={() => setColor("cornflowerblue")}
              className="outline-none px-5 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "cornflowerblue" }}>
              cornflowerblue
            </button>
            <button
                 onClick={() => setColor("Lavender")}
              className="outline-none px-5 py-1 rounded-full text-black shadow-lg"
              style={{ backgroundColor: "Lavender" }}>
              Lavender
            </button>
            <button
                 onClick={() => setColor("orange")}
              className="outline-none px-5 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "orange" }}>
              orange
            </button>
            <button
                 onClick={() => setColor("crimson")}
              className="outline-none px-5 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "crimson" }}>
              crimson
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
