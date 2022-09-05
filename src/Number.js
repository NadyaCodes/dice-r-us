export default function Number(props) {
  let {setNum} = props
  const navigation = []


  for (let i = 1; i < 10; i++) {
    navigation.push(<li><button onClick={() => setNum(i)}>{i}</button></li>)
  }

  return(
    <nav>{navigation}</nav>
  )
}