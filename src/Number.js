import frog from './frog.png'

export default function Number(props) {
  let {setNum, setReset} = props
  const navigation = []


  for (let i = 1; i < 10; i++) {
    navigation.push(<li key={i}><button onClick={() => {setNum(i); setReset(true)}}>{i}</button></li>)
  }

  return(
    <div className="number-picker"><h2>How many dice do you want to roll?</h2>
      <nav>{navigation}</nav>
      <div className="frog"><img src={frog} alt="questioning frog" clasName="frog"></img></div>
    </div>
    
  )
}