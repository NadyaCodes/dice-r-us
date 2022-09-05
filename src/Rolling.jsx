import {four} from './diceHelpers'

export default function Rolling(props) {
  const {num} = props
  const rollingDiceArray = []

  for (let i = 0; i < num; i++) {
    rollingDiceArray.push(<div className="rolling">{four}</div>)
  }

  return(
    <div className="rollingDice">{rollingDiceArray}</div>
  )
}