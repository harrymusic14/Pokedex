import { useEffect, useState } from "react"
import axios from 'axios'
import { useName } from "../../contexts/nameContext"
import PokemonsList from './components/PokemonsList'

const baseUrl = "https://pokeapi.co/api/v2/pokemon"

function Pokedex() {
    const [state] = useName()
    const [pokemons, setPokemons] = useState([])
    
    useEffect(() => {
        axios.get(baseUrl)
            .then(response => {
                setPokemons(response.data.results)
            })
            .catch(error => console.error(error))
    }, [])

    return (
        <div>
            <div className="bg-black w-full h-20 mt-auto mb-6">
                <div className="bg-red-600 w-full h-12"></div>
            </div>

            <div className="max-w-5xl mx-auto px-4">
                <h2><span className="text-red-500 font-semibold">Bienvenido {state.name}</span>, aquí podras encontrar tu pokemón favorito</h2>
                {/* Aqui va el le buscador y el filtro */}

                {/* Aqui va la lista de pokemones */}
                <PokemonsList pokemons={pokemons}/>
            </div>
        </div>
    )
}

export default Pokedex