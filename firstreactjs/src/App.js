import './App.css';
import Header from './Header.js';
import Main from './Main.js';
import Sidebar from './Sidebar.js';


function App({name}) {
  //const n = { name: "Nello", surname: "Rizzo" }
  //const { name } = n
  return (
    <div className="container">
      <Header/>
      <Sidebar/>
      <Main name="Nello"></Main>
    </div>
  );
}

export default App;
