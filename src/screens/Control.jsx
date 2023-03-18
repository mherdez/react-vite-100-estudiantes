import { useRef } from "react";

const Control = () => {

  const colorRef = useRef('')

  // COMUNICACION CON EL EQUIPO 1
  const cambiarColorEq1 = (e) => {
    e.preventDefault()
    const color = colorRef.current.value;
    const equipo1Bc = new BroadcastChannel("equipo1Bc");

    equipo1Bc.postMessage(color);
    console.log('equipo1Bc:',color)
  }


  // COMUNICACION CON EL EQUIPO 2
  const cambiarColorEq2 = (e) => {
    e.preventDefault()
    const color = colorRef.current.value;
    const equipo2Bc = new BroadcastChannel("equipo2Bc");

    equipo2Bc.postMessage(color);
    console.log('equipo2Bc:',color)
  }

  // COMUNICACION CON SCREEN
  const cambiarColorScr = (e) => {
    e.preventDefault()
    const color = colorRef.current.value;
    const preguntasBc = new BroadcastChannel("preguntasBc");

    preguntasBc.postMessage(color);
    console.log('preguntasBc:',color)
  }



  return (
    <>
      <h1>Control</h1>
      <h3>{colorRef.target}</h3>
      <form >
        <div><input ref={colorRef} type="color" name="color" style={{width: '200px', height: '50px', marginBottom: '20px'}}/></div>
        <button onClick={cambiarColorEq1}>Color Equipo 1</button>
        <button onClick={cambiarColorScr}>Screen</button>
        <button onClick={cambiarColorEq2}>Color Equipo 2</button>
      </form>
    </>
  );
};

export default Control;