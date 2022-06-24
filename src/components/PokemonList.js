import './PokemonList.css'

export default function PokemonList({pokemon}) {
  return (
    <div className='container'>
      <div className="pkm-grid">
        {pokemon.map((pkm) =>
          <div className='clickable' key={pkm.id}>
            <div className='each-pkm-div' >
              <img src={pkm.sprites.front_default} alt={pkm.name}/>
            </div>
            <p className='no-margin'>#{pkm.id}</p>
            <p className='no-margin margin-bottom'>{pkm.name[0].toUpperCase() + pkm.name.substring(1)}</p>
          </div>
        )}
      </div>
    </div>
  )
}
