import './App.css';
import Pokedex from './Pokedex';
import data from "./data"


function App() {


  return (<div>
    <Pokedex pokemons={ data } />
  </div>);
}

export default App;
