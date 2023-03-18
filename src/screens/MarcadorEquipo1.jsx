import { useState } from "react";

const MarcadorEquipo1 = () => {

  const [textoH3, setTextoH3] = useState('')

  // Connection to a broadcast channel
const equipo1Bc = new BroadcastChannel("equipo1Bc");
// A handler that only logs the event to the console:
equipo1Bc.onmessage = (event) => {
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
      <h1>Marcador Equipo 1</h1>
      <h2>{textoH3}</h2>
    </>
  );
};

export default MarcadorEquipo1;