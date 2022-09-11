export const rollDice = () => {
  const diceNumber = Math.floor(Math.random() * 6) + 1
  return diceNumber;
}

const one = <div className='dice one'><span className='dot'></span></div>

const two = <div className='dice two'><span className='dot'></span><span className='dot'></span></div>

const three = <div className='dice three'><span className='dot'></span><span className='dot'></span><span className='dot'></span></div>

export const four = <div className='dice four'><span className='col'><span className='dot'></span><span className='dot'></span></span><span className='col'><span className='dot'></span><span className='dot'></span></span></div>

const five = <div className='dice five'><span className='col'><span className='dot'></span><span className='dot'></span></span><span className='dot mid'></span><span className='col'><span className='dot'></span><span className='dot'></span></span></div>


const six = <div className='dice six'><span className='col'><span className='dot'></span><span className='dot'></span><span className='dot'></span></span><span className='col'><span className='dot'></span><span className='dot'></span><span className='dot'></span></span></div>



export const makeDice = (number) => {
  switch(number) {
    case 1:
      return <li className={`one`}>{one}</li>;
    case 2:
      return <li className={`two`}>{two}</li>;
    case 3:
      return <li className={`three`}>{three}</li>;
    case 4:
      return <li className={`four`}>{four}</li>;
    case 5:
      return <li className={`five`}>{five}</li>;
    case 6:
      return <li className={`six`}>{six}</li>;
    default:
      return <li className={`six`}>{six}</li>;
  }
}
