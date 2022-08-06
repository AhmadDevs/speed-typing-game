import logo from './logo.svg';
import './App.scss';
import { useState, useEffect } from 'react';

function App() {
  const [text, setText] = useState("");
  const [timeRemaning, setTimeRemaning] = useState(15);
  const [isRunning, setIsRunning] = useState(false);

  const handleStart = () => {
    console.log("working");
    setIsRunning(true);
  }
  const handleChange = (event) => {
    const {name, value} = event.target;
    setText(value);
  }

  function countWord(text){
    const words = text.trim().split(" ");
    return words.filter(word => word !== "");
  }

  useEffect(() => {
    if (timeRemaning > 0 && isRunning){
      setTimeout( () => {
        setTimeRemaning(time => time -1);
      }, 1000) 
    }else if(isRunning === 0){
      setIsRunning(false);
    }
  }, 
  [timeRemaning, isRunning])

  console.log("hook == ", timeRemaning);

  return (
    <div className="app-container">
        <h1>How fast do you type?</h1>
        <textarea
            type="text"
            value={text}
            name="text"
            onChange={handleChange}
        />
        <h4>Amount of time remaining: {timeRemaning} </h4>
        <button onClick={handleStart}>Start</button>
        <h1>Word Count: </h1>
    </div>   
  );
}

export default App;

