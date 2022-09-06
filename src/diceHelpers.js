const rollDice = () => {
  const diceNumber = Math.floor(Math.random() * 6) + 1
  return diceNumber;
}

const one = <div class='dice one'><span class='dot'></span></div>

const two = <div class='dice two'><span class='dot'></span><span class='dot'></span></div>

const three = <div class='dice three'><span class='dot'></span><span class='dot'></span><span class='dot'></span></div>

export const four = <div class='dice four'><span class='col'><span class='dot'></span><span class='dot'></span></span><span class='col'><span class='dot'></span><span class='dot'></span></span></div>

const five = <div class='dice five'><span class='col'><span class='dot'></span><span class='dot'></span></span><span class='dot mid'></span><span class='col'><span class='dot'></span><span class='dot'></span></span></div>


const six = <div class='dice six'><span class='col'><span class='dot'></span><span class='dot'></span><span class='dot'></span></span><span class='col'><span class='dot'></span><span class='dot'></span><span class='dot'></span></span></div>


export const makeDice = () => {
  const singleRoll = rollDice()

  switch(singleRoll) {
    case 1:
      return <li>{one}</li>;
    case 2:
      return <li>{two}</li>;
    case 3:
      return <li>{three}</li>;
    case 4:
      return <li>{four}</li>;
    case 5:
      return <li>{five}</li>;
    case 6:
      return <li>{six}</li>;
  }
}

