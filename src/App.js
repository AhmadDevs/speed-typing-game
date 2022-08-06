import logo from './logo.svg';
import './App.scss';
import { useState } from 'react';

function App() {
  const [text, setText] = useState("");
    
  const handleChange = (event) => {
      const {name, value} = event.target;
      setText(value);
  }
  return (
    <div class="app-container">
        <h1>How fast do you type?</h1>
        <textarea
            type="text"
            value={text}
            name="text"
            onChange={handleChange}
        />
        <h4>Amount of time remaining: </h4>
        <button>Start</button>
        <h1>Word Count: </h1>
    </div>   
  );
}

export default App;

