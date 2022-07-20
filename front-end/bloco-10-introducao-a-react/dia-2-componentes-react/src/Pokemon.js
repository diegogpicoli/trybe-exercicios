import { Component } from "react";
import "./Pokemon.css"

class Pokemon extends Component {

    

    render() {
        const { id, name, type, averageWeight, image, moreInfo } = this.props.pokemons

        return (
        <div className="divMain">
            <div className="divPokemon">
                <p> { name } </p>
                <p> { type } </p>
                <p>Average Weight: { averageWeight.value }{ averageWeight.measurementUnit }</p>
            </div>
            <img src={ image } ></img>
        </div>
        )
    }
}

export default Pokemon;