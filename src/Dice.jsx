import { makeDice } from './diceHelpers'
// import {useEffect, useState} from 'react'
// import Rolling from './Rolling';


export default function Dice(props) {
  const {num} = props
  const diceArray = []

  for (let i = 0; i < num; i++) {
    diceArray.push(makeDice(i))
  }

  return(
    <div>
    <div className='diceDisplay'>{diceArray}</div> 

    </div>
  )
}