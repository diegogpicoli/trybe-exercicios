import { Component } from "react";
import Pokemon from "./Pokemon"
import "./Pokemon.css"

class Pokedex extends Component {

    

    render() {

        const listaPokemon = this.props.pokemons
        .map((pokemon) => <Pokemon pokemons={ pokemon } /> )
        
        return <div>
            <h1 className="titulo"> Pokedex </h1>

            <div className="main">
                { listaPokemon }
            </div>
            
        </div>
    }
}

export default Pokedex;