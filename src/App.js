import logo from './logo.svg';
import './App.css';
import Contador from './components/Contador.js';
import Menu from './components/menu/menu.js';
import Body from './components/body/body.js';
import NumeroRandom from './components/numeroRandom.js'
function App() {
  return (
    <div>
      <Menu/>
      <Body/>
      <NumeroRandom/>
      <Contador conteoInicial ={1}/>
    </div>
      
    
  );
}

export default App;
