import { makeDice } from "./diceHelpers";

export default function SingleDie() {
  const die = makeDice()
  return <div>{die}</div>;
}