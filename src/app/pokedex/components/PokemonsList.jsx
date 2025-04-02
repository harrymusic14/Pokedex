import PokemonCard from './PokemonCard'

function PokemonsList({pokemons}){
    return(
        <div>
            {pokemons.map(pokemon => (
                <PokemonCard key={pokemon.name} url={pokemon.url} />
            ))}

            {pokemons.length === 0 && <p>No hay pokemons...</p>}
        </div>
    )
}
export default PokemonsList