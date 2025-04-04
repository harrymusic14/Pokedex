import { useEffect, useState } from 'react'
import  {useParams} from 'react-router'
import axios from 'axios'

function Details() {
  const params = useParams()
  const [pokemon, setPokemon] = useState({})

  useEffect(() => {
    if (params.name){
        axios.get(`https://pokeapi.co/api/v2/pokemon/${params.name}`)
            .then((res) => {
                setPokemon(res.data)
            })
            .catch((err) => {
                console.error(err)
            })
    } 
  }, [params.name])
  
  if (!pokemon.name) return null    
  
  return (
    <div>
        <div className={`w-full h-[600px] type-bg--${pokemon.types[0].type.name} flex items-center justify-center`}>
    <img 
        className='object-contain max-w-full max-h-full'
        src={pokemon.sprites?.other?.['official-artwork']?.front_default} 
        alt={pokemon.name} 
    />      
</div>

        <section className='max-w-5xl mx-auto px-4'>
            <h3 className='text-5xl font-semibold text-center'>{pokemon.name}</h3>
        </section>

    </div>
  )
}

export default Details
