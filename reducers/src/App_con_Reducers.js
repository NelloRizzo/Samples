import './App.css';
import { useReducer, useState } from 'react'
import Calculator from './Calculator/Calculator.js';
import { TicTacToe } from './TicTacToe/TicTacToe.js';

function myReducer(state, action) {
  if (action.type === 'increment') {
    return { ...state, age: state.age + 5, color: (state.age > 50) ? 1 : 0 }
  }
  if (action.type === 'decrement')
    return { ...state, age: state.age - 5, color: (state.age > 50) ? 1 : 0 }
}
function App() {
  const [state, setState] = useState({ name: 'Paperino', age: 50 })
  const [statepowered, dispatcher] = useReducer(myReducer, { color: 0, name: 'Paperino', age: 50 })
  return (
    <div className="App">
      <h1 className="text-center">Gestione dello Stato</h1>
      <h2>Gestione con <code>useState</code></h2>
      <p>{state.name} ha {state.age} anni</p>
      <button type='button' onClick={() => setState(s => ({ ...s, age: state.age + 1 }))}>Incrementa Età</button>
      <button type='button' onClick={() => setState(s => ({ ...s, age: state.age + 1 }))}>Incrementa Età</button>
      <h2>Gestione con <code>useReducer</code></h2>
      <div className={`ball ${statepowered.color == 0 ? 'red' : 'green'}`}></div>
      <p>{statepowered.name} ha {statepowered.age} anni</p>
      <button type='button' onClick={() => dispatcher({ type: 'increment' })}>Incrementa Età</button>
      <button type='button' onClick={() => dispatcher({ type: 'decrement' })}>Decrementa Età</button>
      <h2>Calcolatrice</h2>
      <Calculator />
      <h2>Tris</h2>
      <TicTacToe />
    </div >
  );
}

export default App;
