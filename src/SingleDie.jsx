import { makeDice } from "./diceHelpers";

export default function SingleDie(props) {
  const singleDie = makeDice(props.die)

  return <div>{singleDie}</div>;
}