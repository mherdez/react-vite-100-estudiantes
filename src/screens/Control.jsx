import { useRef } from "react";

const Control = () => {

  const equipo1Bc = new BroadcastChannel("equipo1Bc");
  const equipo2Bc = new BroadcastChannel("equipo2Bc");
  const preguntasBc = new BroadcastChannel("preguntasBc");
  const todosBc = new BroadcastChannel("todosBc");
  const colorRef = useRef('')
  const textoRef = useRef('')

  // COMUNICACION CON EL EQUIPO 1
  const cambiarColorEq1 = (e) => {
    e.preventDefault()
    const color = colorRef.current.value;
    const texto = textoRef.current.value;
    equipo1Bc.postMessage({color, texto});
    console.log('equipo1Bc:',{color,texto})
  }


  // COMUNICACION CON EL EQUIPO 2
  const cambiarColorEq2 = (e) => {
    e.preventDefault()
    const color = colorRef.current.value;
    const texto = textoRef.current.value;


    equipo2Bc.postMessage({color, texto});
    console.log('equipo2Bc:',color)
  }

  // COMUNICACION CON SCREEN
  const cambiarColorScr = (e) => {
    e.preventDefault()
    const color = colorRef.current.value;
    const texto = textoRef.current.value;


    preguntasBc.postMessage({color, texto});
    console.log('preguntasBc:',color)
  }

  // COMUNICACION CON SCREEN
  const cambiarColorTodos = (e) => {
    e.preventDefault()
    const color = colorRef.current.value;
    const texto = textoRef.current.value;
    todosBc.postMessage({color, texto});
    console.log('todosBc:',color)
  }



  return (
    <>
      <h1>Control</h1>
      <h3>{colorRef.target}</h3>
      <form >
        <div><input ref={colorRef} type="color" style={{width: '200px', height: '50px', marginBottom: '20px'}}/></div>
        <button onClick={cambiarColorEq1}>Color Equipo 1</button>
        <button onClick={cambiarColorScr}>Screen</button>
        <button onClick={cambiarColorEq2}>Color Equipo 2</button>
        <button onClick={cambiarColorTodos}>Todos</button>
        <div><input type='text' ref={textoRef} style={{width: '400px', height: '30px', margin: '20px', fontSize: '20px'}}/></div>
      </form>
    </>
  );
};

export default Control;