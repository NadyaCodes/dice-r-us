export default function Number(props) {
  let {setNum, setReset} = props
  const navigation = []


  for (let i = 1; i < 10; i++) {
    navigation.push(<li><button onClick={() => {setNum(i); setReset(true)}}>{i}</button></li>)
  }

  return(
    <nav>{navigation}</nav>
  )
}