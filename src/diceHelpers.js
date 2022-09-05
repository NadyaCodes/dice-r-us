const rollDice = () => {
  const diceNumber = Math.floor(Math.random() * 6) + 1
  return diceNumber;
}

export const makeDice = () => {
  const singleRoll = rollDice()
  return <li>{singleRoll}</li>
}


export const one = <div class='dice one'><span class='dot'></span></div>

export const two = <div class='dice two'><span class='dot'></span><span class='dot'></span></div>

export const three = <div class='dice three'><span class='dot'></span><span class='dot'></span><span class='dot'></span></div>

export const four = <div class='dice four'><span class='col'><span class='dot'></span><span class='dot'></span></span><span class='col'><span class='dot'></span><span class='dot'></span></span></div>

export const five = <div class='dice five'><span class='col'><span class='dot'></span><span class='dot'></span></span><span class='dot mid'></span><span class='col'><span class='dot'></span><span class='dot'></span></span></div>


export const six = <div class='dice six'><span class='col'><span class='dot'></span><span class='dot'></span><span class='dot'></span></span><span class='col'><span class='dot'></span><span class='dot'></span><span class='dot'></span></span></div>
