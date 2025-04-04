import PokemonCard from './PokemonCard'

function PokemonsList({pokemons}){
    return(
        <div className='grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-4'>
            {pokemons.map(pokemon => (
                <PokemonCard key={pokemon.name} url={pokemon.url} />
            ))}

            {pokemons.length === 0 && <p>No hay pokemons</p>}
        </div>
    )
}
export default PokemonsList