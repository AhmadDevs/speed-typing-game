import logo from './logo.svg';
import './App.scss';
import { useState, useEffect } from 'react';

function App() {
  const [text, setText] = useState("");
  const [timeRemaning, setTimeRemaning] = useState(2);
  const [isRunning, setIsRunning] = useState(false);
  const [wordLength, setWordLength] = useState(0);

  const handleStart = () => {
    setIsRunning(true);
    setWordLength(0);
    setText("")
  }
  const handleChange = (event) => {
    const {name, value} = event.target;
    setText(value);
  }

  function countWord(text){
    const words = text.trim().split(" ");
    return words.filter(word => word !== "").length;
  }

  useEffect(() => {
    if (timeRemaning > 0 && isRunning){
      setTimeout( () => {
        setTimeRemaning(time => time -1);
      }, 1000) 
    }else if(timeRemaning === 0){
      setIsRunning(false);
      setTimeRemaning(2);
      setWordLength(countWord(text));
    }
  }, 
  [timeRemaning, isRunning])


  return (
    <div className="app-container">
        <h1>How fast do you type?</h1>
        <textarea
            type="text"
            value={text}
            name="text"
            onChange={handleChange}
            disabled={!isRunning}
        />
        <h4>Amount of time remaining: {timeRemaning} </h4>
        <button disabled={isRunning} onClick={handleStart}>Start</button>
        <h1>Word Count: {wordLength}</h1>
    </div>   
  );
}

export default App;

