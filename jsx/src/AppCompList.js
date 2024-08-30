import "./App.css";

function App() {
  return <Hello name="licat" />;
}

function Hello(props) {
  const name = props.name;
  return (
    <div>
      <h1>안녕, {name} 1호</h1>
    </div>
  );
}

export default App;
