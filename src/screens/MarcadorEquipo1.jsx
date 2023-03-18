import { useState } from "react";
import './Marcador.css';

const MarcadorEquipo1 = () => {

  const [textoH3, setTextoH3] = useState('')

  const equipo1Bc = new BroadcastChannel("equipo1Bc");
  const todosBc = new BroadcastChannel("todosBc");


  equipo1Bc.onmessage = (event) => {
    const x = Array(event.data.x).fill('X')
    console.log(x)
    if(event.data.x <= 3) setTextoH3(x)
};

// A handler that only logs the event to the console:
todosBc.onmessage = (event) => {
  setTextoH3(event.data.texto)
};


  return (
    <>
      <div className="container">
        <div className="score-container">
          <h1 className="score-puntos">0</h1>
          <h2 className="score-equipo">Equipo 1</h2>
        </div>
        <h3 className="score-xxx">{textoH3}</h3>
      </div>
    </>
  );
};

export default MarcadorEquipo1;