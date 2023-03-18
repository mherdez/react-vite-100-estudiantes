import { useState } from "react";

import './Marcador.css';

const MarcadorEquipo2 = () => {

  const [textoH3, setTextoH3] = useState('')

  // Connection to a broadcast channel
const equipo2Bc = new BroadcastChannel("equipo2Bc");
// A handler that only logs the event to the console:
equipo2Bc.onmessage = (event) => {
const body = document.querySelector('body')
  body.style.backgroundColor = `${event.data.color}`
};

const todosBc = new BroadcastChannel("todosBc");
// A handler that only logs the event to the console:
todosBc.onmessage = (event) => {
const body = document.querySelector('body')
body.style.backgroundColor = `${event.data.color}`
  console.log(event.data.texto)
  setTextoH3(event.data.texto)
};


  return (
    <>
      <h1>Marcador Equipo 2</h1>
      <h2>{textoH3}</h2>
    </>
  );
};

export default MarcadorEquipo2;