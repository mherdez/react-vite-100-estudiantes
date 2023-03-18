const Preguntas = () => {

// Connection to a broadcast channel
const preguntasBc = new BroadcastChannel("preguntasBc");
  // A handler that only logs the event to the console:
  preguntasBc.onmessage = (event) => {
  console.log(event.data);
  const body = document.querySelector('body')
  body.style.backgroundColor = `${event.data}`
};

const todosBc = new BroadcastChannel("todosBc");
// A handler that only logs the event to the console:
todosBc.onmessage = (event) => {
console.log(event.data);
const body = document.querySelector('body')
  body.style.backgroundColor = `${event.data}`
};

  return (
    <>
      <h1>Preguntas</h1>
    </>
  );
};

export default Preguntas;