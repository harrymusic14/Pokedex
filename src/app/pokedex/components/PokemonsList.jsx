import {Link} from 'react-router'
import PokemonCard from './PokemonCard'

function PokemonsList({pokemons}){
    return(
        <div className='grid grid-cols-[repeat(auto-fit, _minmax(330px,_1fr))] gap-4'>
            {pokemons.map(pokemon => (
                <Link key={pokemon.name} to={`/pokedex/${pokemon.name}`} className='block border'>
                    <PokemonCard url={pokemon.url} />
                </Link>
            ))}

            {pokemons.length === 0 && <p>No hay pokemons</p>}
        </div>
    )
}
export default PokemonsList