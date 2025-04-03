import { useEffect, useState } from "react"
import {Link} from 'react-router'
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

    if(!pokemon.types) return null

    
    return (
        <Link  
            to={`/pokedex/${pokemon.name}`} 
            className={`block border-8 type-border--${pokemon.types?.[0].type.name}`}
        >
            <div className="aspect-video">
                <img 
                className={`size-full object-contain type-bg--${pokemon.types?.[0].type.name}`}
                src={pokemon.sprites?.other?.['official-artwork']?.front_default} 
                alt={pokemon.name} 
                />
            </div>
            <div className="p-4 text-center">
                <h2 className="capitalize text-2x1 font-semibold">{pokemon.name}</h2>
                <p className="capitalize">{pokemon.types.map(p => p.type.name).join(' / ')}
                </p>
                <span className="text-gray-400 text-sm">Tipo</span>
                <ul className="border-t-1 border-gray-200 mt-4">
                    <li>
                        HP
                        <span>{}</span>
                    </li>
                    <li>
                        ATAQUE
                        <span>{}</span>
                    </li>
                    <li>
                        DEFENSA
                        <span>{}</span>
                    </li>
                    <li>
                        VELOCIDAD
                        <span>{}</span>
                    </li>
                </ul>
            </div>
        </Link>
    )
}

export default PokemonCard
