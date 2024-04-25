import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);

  const addValue = () => {
    if(counter >= 20 ){
    }
    else{
    setCounter(counter + 1); 
    }
  };

  const MinusValue = () =>{
    if(counter <= 0){

    }else{
      setCounter(counter - 1)

    }
  }

  return (
    <>
      <h1>Harman te React!</h1>
      <h2>counter value: {counter}</h2>

      <button onClick={addValue}>AddValue {counter}</button>
      <button onClick={MinusValue}>MinusValue {counter}</button>

      <p>footer {counter}</p>
    </>
  );
}

export default App;
