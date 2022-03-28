import React, { useState, useEffect } from 'react'

function App() {
  
  const [state, setState] = useState();

  const getQuote = async () => {
    const response = await fetch('http://localhost:3001/api');
    const data = await response.json();
    setState(data);
  };

  useEffect(() => {
    getQuote();
  }, [])

  return (
    <div className="App">
      <div className="quote">{state}</div>
      <button onClick={getQuote}>DO IT</button>
    </div>
  );
}

export default App