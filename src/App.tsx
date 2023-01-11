import React, { useEffect, useState } from 'react';
import init, { add } from "wasm-lib";
import logo from './logo.svg';
import './App.css';

function App() {
  const [ans, setAns] = useState(0);
  // useEffect(() => {
  //   init().then(() => {
  //     setAns(add(1, 1));
  //   })
  // }, [])

  useEffect(() => {
    add(2, 2) 
  })
  return (
    <div className="App">
        <p>1 + 1 = {ans}</p>
    </div>
  );
}

export default App;