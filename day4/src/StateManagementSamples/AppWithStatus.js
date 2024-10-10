import './App.css';
import { useState } from 'react'

const Approved = 0, Refused = 1, Waiting = 2

function Item({ text, status, onClick }) {
    if (status === Refused) return null
    const cl =
        (status === Approved ? "green" : status === Refused ? "red" : "yellow")
    return <li className={cl} onClick={onClick} >{text}</li>
}

function List({ children }) {
    return <ul className="statuses">{children}</ul>
}

const items = [
    { 'title': 'Primo', 'status': Approved },
    { 'title': 'Secondo', 'status': Approved },
    { 'title': 'Terzo', 'status': Waiting },]

function App() {
    const [history, setHistory] = useState(['Nessun click'])
    return (
        <div className="container">
            <h1>React Application</h1>
            <List>
                {items.map((i, p) =>
                    <Item text={i.title} status={i.status} onClick={() => {
                        console.log("click su", i)
                        setHistory([...history, i.title])
                    }
                    }></Item>
                )}
            </List>

            <h2>History</h2>
            <button type='button' onClick={
                () => {
                    const a = Array.from({ length: 10 }, (_, k) => "Testo n. " + k)
                    setHistory(a)
                }
            }>Popolamento</button>
            <button type="button" onClick={() => setHistory([])}>Cancella</button>
            <ol>
                {history.map(i => <li>{i}</li>)}
            </ol>
        </div>
    )
}

export default App
