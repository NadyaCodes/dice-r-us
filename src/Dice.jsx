import RollingDie from './RollingDie'
import { useState, useEffect } from 'react'
import SingleDie from './SingleDie'
import { rollDice } from './diceHelpers'


export default function Dice(props) {
  const {num} = props
  let diceArray = []
  const [dice, setDice] = useState(diceArray)
  const [savedDice, setSavedDice] = useState([])
  const [tally, setTally] = useState(1)


  for (let i = 0; i < num; i++) {
    diceArray.push({phase: <RollingDie/>})
  }

  const saveDice = (die) => {
    setSavedDice((prev) => [...prev, die.phase])
    dice.splice(dice.indexOf(die), 1)
  }
 

  const allDice = dice.map((die, index) => {
    return <div key={index} onClick={() => saveDice(die)}>{die.phase}</div>
  })


  const undoSave = (die) => {
    const dieObject = {}
    dieObject.phase = die
    savedDice.splice(savedDice.indexOf(die), 1)
    setDice((prev) => [...prev, dieObject])
  }

  const saves = savedDice.map((die, index) => {
    return <div className="fly-in"><div key={index} className="savedDice" onClick={() => undoSave(die)}>{die}</div></div>
  })

  const rollAgain = () => {
    diceArray = [];
    for (let i = 0; i < dice.length; i++) {
      diceArray.push({phase: <RollingDie/>})
    }
    setDice([...diceArray])
    setTally(tally + 1)

    for (let j=0; j < dice.length; j++) {
      setTimeout(() => {
        const newDiceArray = [...diceArray]
        const die = rollDice()
        newDiceArray[j].phase = <SingleDie die={die}/>
        setDice(newDiceArray)
      }, (j + 1) * 900)
    }

  }



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
    <div className='dice-container'>
      <div className='roll-container'>
        <div className='diceDisplay'>
          {allDice}
        </div>
          <button onClick={() => rollAgain()}>Roll Again</button>
          <button>Roll: {tally}</button>
        </div>
      <div className='saved-container'>
        <div className='diceDisplay backwards'>{saves}</div>
      </div>
    </div>
  )
}