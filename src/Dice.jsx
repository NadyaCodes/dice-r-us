import { makeDice } from './diceHelpers'
import {useEffect, useState} from 'react'


export default function Dice(props) {
  let {num} = props
  const [showDice, setShowDice] = useState(false)
  const diceArray = []

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

  return(
    <div>
    {showDice === true ? <div className='diceDisplay'>{diceArray}</div> : <div>Loading...</div>  }
    </div>
  )
}