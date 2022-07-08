import './PokemonList.css'
import SinglePoke from './SinglePoke'
import { Link } from "react-router-dom";

export default function PokemonList({pokemon}) {
  return (
    <div className='container'>
      <div className="pkm-grid">
        {pokemon.map((pkm) =>
          <SinglePoke singlePoke={pkm} key={pkm.id}/>
          // {console.log(pkm.name)}
        )}
      </div>
    </div>
  )
}
