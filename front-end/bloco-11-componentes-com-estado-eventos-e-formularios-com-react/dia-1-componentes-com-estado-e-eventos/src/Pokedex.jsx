import { Component } from "react";
import Pokemon from "./Pokemon"
import "./Pokemon.css"
import All from "./All";

class Pokedex extends Component {
    constructor() {
        super()

        this.state = {
            listaPokemon: [],
        }
    }

    testandoteste = ({target}) => {
        const { name, value } = target
        this.setState({
            [name]: value
        })
    }
    

    render() {

        const listaPokemon = this.props.pokemons
        .map((pokemon) => <Pokemon pokemons={ pokemon } /> )


        return <div>
            <h1 className="titulo"> Pokedex </h1>

            <div className="main">
                <All novaLista={ this.state.listaPokemon } lista={ listaPokemon } />
                <button name="listaPokemon" value={ listaPokemon } onClick={ this.testandoteste }>Electric</button>
                <button>Fire</button>
                <button>Bug</button>
                <button>Poison</button>
                <button>Psychic</button>
                <button>Normal</button>
                <button>Dragon</button>
            </div>
            
        </div>
    }
}

export default Pokedex;