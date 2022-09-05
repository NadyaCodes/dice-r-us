import logo from './logo.svg';
import './App.css';
import Dice from './Dice';
import Number from './Number';
import {useState} from 'react'

function App() {
  const [num, setNum] = useState(0)

  return (
    <div>
      <Number setNum={setNum}/>
      {num > 0 && <Dice num={num}/>}
    </div>
  );
}

export default App;
