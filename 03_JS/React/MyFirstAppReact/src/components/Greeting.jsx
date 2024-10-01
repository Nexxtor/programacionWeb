function SubComponent() {
    
}

function Greeting({ name, onClick }) {
  return <h1 onClick={onClick}>Hola, {name}!!</h1>;
}

export default Greeting;
