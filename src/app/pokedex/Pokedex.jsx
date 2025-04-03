import { useEffect, useState } from "react"
import axios from 'axios'
import { useName } from "../../contexts/nameContext"
import PokemonsList from './components/PokemonsList'

const baseUrl = "https://pokeapi.co/api/v2/pokemon"

function Pokedex() {
    const [state] = useName()
    const [pokemons, setPokemons] = useState([])
    const [filteredPokemons, setFilterdPokemons] = useState([])
    const [siglePokemon, setSinglePokemon] = useState(null)
    const [search, setSearch] = useState('')
    

    const getPokemons = async () => {
        axios.get(baseUrl + '?limit=150')
            .then(response => {
                setPokemons(response.data.results)
            })
            .catch(error => console.error(error))
    }
    
    useEffect(() => {
        getPokemons()
    }, [])

    useEffect(() => {
        if (!search) {
            setFilterdPokemons(pokemons)
            setSinglePokemon(null)
            return
        }
        setFilterdPokemons(
            pokemons.filter(p=>p.name.toLowerCase().includes(search.toLowerCase()))
        )
    }, [search, pokemons])
    
    const searchPokemon = () => {
        axios.get(baseUrl + '/' + search.toLowerCase())
            .then(response => {
                setSinglePokemon(response.data)
            })
            .catch(error => console.error(error))
    }

    return (
        <div>
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="mb-9"><span className="text-red-500 font-semibold">Bienvenido {state.name}</span>, aquí podras encontrar tu pokemón favorito</h2>
                <div className="mb-9    ">
                    <input 
                        type="text"
                        placeholder="bucar pokemón..."
                        volue={search}
                        onChange={(e)=>setSearch(e.target.value)} 
                        className="input"
                        />
                    <button className="btn" onClick={searchPokemon}>
                        Buscar
                    </button>
                </div>

                {/* Aqui va el pokemón */}
                

                {siglePokemon ? (
                    <div>
                        <h2>{siglePokemon.name}</h2>
                        <img src={siglePokemon.sprites?.front_default} alt={siglePokemon.name} />
                    </div>
                ) : (
                    <PokemonsList pokemons={filteredPokemons}/>
                )}  
                {/* Aqui va la lista de pokemones */}
            </div>
        </div>
    )
}

export default Pokedex