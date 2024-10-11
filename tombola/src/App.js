import './App.css';
import Table from './Components/Table/Table.js';
function App() {
  const numbers = [23, 56, 16, 67, 87, 44, 90, 50, 13, 1]
  return (
    <div className="App">
      <header><h1>Tombola in React</h1></header>
      <Table drawn={numbers} />
    </div>
  );
}

export default App;
