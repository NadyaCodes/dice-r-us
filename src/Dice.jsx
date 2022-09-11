import RollingDie from './RollingDie'
import { useState, useEffect } from 'react'
import SingleDie from './SingleDie'
import { rollDice } from './diceHelpers'


export default function Dice(props) {
  const {num} = props
  const diceArray = []
  const [dice, setDice] = useState(diceArray)
  const [savedDice, setSavedDice] = useState([])


  for (let i = savedDice.length; i < num; i++) {
    diceArray.push({phase: <RollingDie/>})
  }

  const saveDice = (die) => {
    setSavedDice((prev) => [...prev, die.phase])
    dice.splice(dice.indexOf(die), 1)
  }

  const allDice = dice.map((die, index) => {
    return <div key={index} onClick={() => saveDice(die)}>{die.phase}</div>
  })

  // const undoSave = (die) => {
  //   console.log(die)
  //   console.log(savedDice.indexOf(die))
  //   const newSavedDice = savedDice.splice(savedDice.indexOf(die), 1)
  //   setSavedDice(newSavedDice)
  //   setDice((prev) => [...prev, die])
  // }

  // onClick={() => undoSave(die)}

  const saves = savedDice.map((die, index) => {
    return <div key={index}>{die}</div>
  })




  useEffect(() => {
    for (let j=0; j < num; j++) {
      setTimeout(() => {
        const newDiceArray = [...diceArray]
        const die = rollDice()
        newDiceArray[j].phase = <SingleDie die={die}/>
        setDice(newDiceArray)
      }, (j + 1) * 900)
    }


  }, [num])

  return(
    <div>
      <div className='diceDisplay'>
        {allDice}
      </div>
      <hr/>
      <div className='diceDisplay'>{saves}</div>
      
    </div>
  )
}