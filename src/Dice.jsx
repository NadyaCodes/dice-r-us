import { makeDice } from './diceHelpers'


export default function Dice(props) {
  let {num} = props
  const diceArray = []


  for (let i = 0; i < num; i++) {
    diceArray.push(makeDice())
  }

  return(
    <div className='diceDisplay'>{diceArray}</div> 
  )
}