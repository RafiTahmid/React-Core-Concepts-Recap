import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <District name="Bhola" special="Doi"></District>
      <District name="B.baria" special="Fighter"></District>
      <District name="Barisal" special="Monu"></District>
    </div>
  );
}

function District(props){
  const [power, setPower] = useState(1)
  const boostPower = () =>{
    const newPower = power * 2
    setPower(newPower);
  }
  return(
    <div className='district'>
      <h2>Name: {props.name}</h2>
      <p>Specialty: {props.special}</p>
      <h4>Power: {power}</h4>
      <button onClick={boostPower}>Boost The Power</button>
    </div>
  )
}

export default App;
