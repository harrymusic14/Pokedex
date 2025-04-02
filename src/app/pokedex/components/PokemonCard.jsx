import { useEffect, useState } from "react"
import axios from 'axios'

function PokemonCard ({url}){
    const [pokemon, setPokemon] = useState({})

    useEffect(()=>{
        axios.get(url)
            .then(response => {
                setPokemon(response.data)
            })
            .catch(error => console.error(error))
    }, [url])
    
    return (
        <div>
            <h2>{pokemon.name}</h2>
            <img src={pokemon.sprites?.front_default} alt={pokemon.name} />
        </div>
    )
}

export default PokemonCard
