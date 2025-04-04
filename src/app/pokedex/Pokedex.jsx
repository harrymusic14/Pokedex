import { useEffect, useState } from "react"
import axios from 'axios'
import { useName } from "../../contexts/nameContext"
import PokemonsList from './components/PokemonsList'
import PokemonCard from "./components/PokemonCard"


const baseUrl = "https://pokeapi.co/api/v2/pokemon"

function Pokedex() {
    const [state] = useName()
    const [pokemons, setPokemons] = useState([])
    const [filteredPokemons, setFilterdPokemons] = useState([])
    const [types, setTypes] = useState([])
    const [siglePokemon, setSinglePokemon] = useState(null)
    const [search, setSearch] = useState('')
    const [selectedType, setSelectedType] = useState('')
    

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

    useEffect(()=>{
        axios.get('https://pokeapi.co/api/v2/type?limit=21')
            .then(response => {
                setTypes(response.data.results)
            })
            .catch(error => console.error(error))
    }, [])
    
    useEffect(() => {
        if (selectedType === 'all') {
            setFilterdPokemons(pokemons)
            setSinglePokemon(null)
            return
        }
        if (selectedType){
            axios.get('https://pokeapi.co/api/v2/type/' + selectedType)
                .then(response => {
                    setFilterdPokemons(response.data.pokemon.map(p => p.pokemon))
                    setSinglePokemon(null)
                })
                .catch(error => console.error(error))
        }
    },[selectedType])

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
        if (!search) {
            setFilterdPokemons(pokemons)
            setSinglePokemon(null)
            return
        }

        axios.get(baseUrl + '/' + search.toLowerCase())
            .then(response => {
                setSinglePokemon(baseUrl + '/' + response.data.name)
            })
            .catch(error => console.error(error))
    }

    return (
        <div>
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex flex-col items-center">
                <h2 className="mb-9"><span className="text-red-500 font-semibold">Bienvenido {state.name}</span>, aquí podras encontrar tu pokemón favorito</h2>
                <div className="mb-9    ">
                    <input 
                        type="text"
                        placeholder="bucar pokemón..."
                        value={search}
                        onChange={(e)=>setSearch(e.target.value)} 
                        className="input"
                        />
                    <button className="btn" onClick={searchPokemon}>
                        Buscar
                    </button>

                    <select
                        value={selectedType}
                        onChange={(e) => setSelectedType(e.target.value)}
                        className="input ml-4"
                    >
                        <option value="all">ALL Pokémon</option>
                        {types.map(type => (
                            <option key={type.name} value={type.name} className="capitalize">
                                {type.name}
                            </option>
                        ))}
                    </select>
                </div>

                {siglePokemon ? (
                    <PokemonCard url={siglePokemon} />
                ) : (
                    <PokemonsList pokemons={filteredPokemons}/>
                )}  
                {/* Aqui va la lista de pokemones */}
            </div>

                </div>
        </div>
    )
}

export default Pokedex