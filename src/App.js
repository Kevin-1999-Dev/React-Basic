
import './App.css';

function App() {
  let name = "Kevin";
  let changeNameButton = () => {
    name = "Kaung Zaw Han";
  }
  return (
    <div className="App">
      <h1>{name}</h1>
      <button onClick={changeNameButton}>change name</button>
    </div>
  );
}

export default App;
