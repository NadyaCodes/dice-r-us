import logo from './logo.svg';
import './App.css';
import Dice from './Dice';
import Number from './Number';
import {useState} from 'react';

function App() {
  const [num, setNum] = useState(0)
  const [reset, setReset] = useState(false)

  return (
    <div className='app'>
      {reset === true ? <button onClick={() => {setNum(0); setReset(false)}} className='reset'>Reset</button> : <Number setNum={setNum} setReset={setReset}/>}
      {num > 0 && <Dice num={num}/>}
    </div>
  );
}

export default App;
