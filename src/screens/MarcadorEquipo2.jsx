const MarcadorEquipo2 = () => {


  // Connection to a broadcast channel
const equipo2Bc = new BroadcastChannel("equipo2Bc");
// A handler that only logs the event to the console:
equipo2Bc.onmessage = (event) => {
console.log(event.data);
const body = document.querySelector('body')
  body.style.backgroundColor = `${event.data}`
};

  return (
    <>
      <h1>Marcador Equipo 2</h1>
    </>
  );
};

export default MarcadorEquipo2;