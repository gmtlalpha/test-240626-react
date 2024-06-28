import logo from './logo.svg';
import './App.css';
import { memo, useMemo, useState } from 'react';


function App() {

  const [number, setNumber]=useState(1)

  const add = ()=>{
    setNumber(number+1);
    console.log(number)
  }
  return (
    <div>
      <h1>Number:{number}</h1>
      <button onClick={add}>add</button>
    </div>
  );
}

export default App;
