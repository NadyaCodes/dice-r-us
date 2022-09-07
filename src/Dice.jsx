import { makeDice, stopDice } from './diceHelpers'
import {useEffect, useState} from 'react'
import Rolling from './Rolling';


export default function Dice(props) {
  const {num} = props
  const [showDice, setShowDice] = useState(false)
  const diceArray = []
  // let stoppedDice = []

  for (let i = 0; i < num; i++) {
    diceArray.push(makeDice())
  }

  useEffect(() => {
    if (num > 0) {
      setShowDice(false);
      setTimeout(() => {
        setShowDice(true)
      }, 1000);
    }
  }, [num])

  // useEffect(() => {
  //   if (showDice === true) {
  //     stoppedDice = stopDice(diceArray)
  //   }
  // }, [showDice])

  return(
    <div>
    {showDice === true ? <div className='diceDisplay'>{diceArray}</div> : <Rolling num={num}/>  }
    </div>
  )
}