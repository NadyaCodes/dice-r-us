export default function Dice(props) {
  let {num} = props
  const diceArray = []

  const rollDice = () => {
    const diceNumber = Math.floor(Math.random() * 6) + 1
    return diceNumber;
  }

  const makeDice = () => {
    const singleRoll = rollDice()
    return <li>{singleRoll}</li>
  }

  for (let i = 0; i < num; i++) {
    diceArray.push(makeDice())
  }
  return(
    <div>{diceArray}</div>
  )
}