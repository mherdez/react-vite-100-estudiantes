import { useEffect, useState } from 'react';
import { equipo1Bc, equipo2Bc, preguntasBc, todosBc } from '../helpers/brodcast.js'

const Control = () => {

  const [xEq1, setXEq1] = useState(0)

  useEffect( () => {
    equipo1Bc.postMessage({x: xEq1})
    console.log(xEq1)
  },[xEq1])

  return (
    <>
    {/* <ControlColores /> */}
      <h1>Control</h1>
      <button onClick={() =>setXEq1( xEq1 < 3 ? xEq1 + 1 : 3)}>Equipo 1 - X</button> &nbsp;
      <button onClick={() =>setXEq1(0)}>reset</button>
    </>
  )
}
export default Control;