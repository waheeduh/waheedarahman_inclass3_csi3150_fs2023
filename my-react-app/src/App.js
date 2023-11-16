import React, { useState, useEffect } from 'react';
import './App.css';

function Counter() {
  const initialCount = parseInt(localStorage.getItem('counter')) || 0;
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    const newCount = count + 1;
    setCount(newCount);
    localStorage.setItem('counter', newCount);
  };

  const decrement = () => {
    const newCount = count - 1;
    setCount(newCount);
    localStorage.setItem('counter', newCount);
  };

  return (
    <div className="counter-container">
      <h2> {count}</h2>
      <div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;
