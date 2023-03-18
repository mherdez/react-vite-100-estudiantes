import { useState } from "react";

const Preguntas = () => {

  const [textoH3, setTextoH3] = useState('')

  // Connection to a broadcast channel
const preguntasBc = new BroadcastChannel("preguntasBc");
// A handler that only logs the event to the console:
preguntasBc.onmessage = (event) => {
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
      <h1>Preguntas</h1>
      <h2>{textoH3}</h2>
    </>
  );
};

export default Preguntas;