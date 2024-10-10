import './App.css';
const Approved = 0, Refused = 1, Waiting = 2

function Item({ text, status, clickMe }) {
  function myEv(e) {
    console.log("Gestione evento")
    clickMe()
    if (status === Waiting)
      e.stopPropagation()
  }
  if (status === Refused) return null
  const cl =
    (status === Approved ? "green" : status === Refused ? "red" : "yellow")
  return <li className={cl} onClick={myEv}>{text}</li>
}

function List({ children }) {
  return <ul className="statuses" onClick={() => alert('click su ul')}>{children}</ul>
}

const items = [
  { 'title': 'Primo', 'status': Approved },
  { 'title': 'Secondo', 'status': Approved },
  { 'title': 'Terzo', 'status': Waiting },]

function handleClick() {
  alert('Ciao da handler')
}

function App() {
  return (
    <div className="container">
      <h1 onClick={() => alert('Ciao da arrow function')}>React Application</h1>
      <h1 onClick={handleClick}>React Application</h1>
      <List>
        {items.map((i, p) => {
          const ev = p % 2 === 0 ? () => alert("Elemento di indice pari") : () => alert("Elemento di indice dispari")
          return (
            <Item text={i.title} status={i.status} clickMe={ev}></Item>
          )
        })}
      </List>
    </div>
  )
}

export default App
