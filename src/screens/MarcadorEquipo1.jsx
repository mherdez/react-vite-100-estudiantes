const MarcadorEquipo1 = () => {


  // Connection to a broadcast channel
const equipo1Bc = new BroadcastChannel("equipo1Bc");
// A handler that only logs the event to the console:
equipo1Bc.onmessage = (event) => {
console.log(event.data);
const body = document.querySelector('body')
  body.style.backgroundColor = `${event.data}`
};


  return (
    <>
      <h1>Marcador Equipo 1</h1>
      {/* <h3>{event.data}</h3> */}
    </>
  );
};

export default MarcadorEquipo1;