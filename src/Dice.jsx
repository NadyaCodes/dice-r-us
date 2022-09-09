import RollingDie from './RollingDie'
import { useState, useEffect } from 'react'
import SingleDie from './SingleDie'


export default function Dice(props) {
  const {num} = props
  const diceArray = []
  const [dice, setDice] = useState(diceArray)

  for (let i=0; i < num; i++) {
    diceArray.push({phase: <RollingDie/>})
  }

  const allDice = dice.map((dice, index) => {
    return <div key={index}>{dice.phase}</div>
  })


  useEffect(() => {
    for (let j=0; j < num; j++) {
      setTimeout(() => {
        const newDiceArray = [...diceArray]
        newDiceArray[j].phase = <SingleDie/>
        setDice(newDiceArray)
      }, (j + 1) * 900)
    }


  }, [num])

  return(
    <div className='diceDisplay'>
      {allDice}
    </div>
  )
}