import { one, two, three, four, five, six, makeDice } from './diceHelpers'


export default function Dice(props) {
  let {num} = props
  const diceArray = []



  for (let i = 0; i < num; i++) {
    diceArray.push(makeDice())
  }
  return(
    <div>{diceArray}  <br /> {one} <br />{two}<br />{three} <br />{four} <br />{five} <br />{six}</div>
    
  )
}