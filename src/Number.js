export default function Number(props) {
  let {setNum, setReset} = props
  const navigation = []


  for (let i = 1; i < 10; i++) {
    navigation.push(<li key={i}><button onClick={() => {setNum(i); setReset(true)}}>{i}</button></li>)
  }

  return(
    <div className="number-picker">How many dice do you want to roll?
      <nav>{navigation}</nav>
    </div>
    
  )
}