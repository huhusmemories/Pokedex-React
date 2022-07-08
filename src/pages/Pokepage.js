import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import './Pokepage.css'
import Simplebar from '../components/SimpleBar'

export default function Pokepage(pkm) {
  const { id } = useParams()
  const url = 'https://pokeapi.co/api/v2/pokemon/' + id
  const [onePoke, setOnePoke] = useState('')
  const urlFlavorText = 'https://pokeapi.co/api/v2/pokemon-species/' + id
  const [onePokeFlavorText, setOnePokeFlavorText] = useState('')

  useEffect(() => {
    const fetching = async () => {
      const pkm = await axios.get(url)
      setOnePoke(pkm.data)
    }
    const fetchingDescription = async () => {
      const desc = await axios.get(urlFlavorText)
      setOnePokeFlavorText(desc.data.flavor_text_entries[0].flavor_text)
    }
    fetching()
    fetchingDescription()
  }, [url])


  return (
    <>
      <Simplebar />
      <div key={Math.random()}>
        {onePoke && <div className='poke-page background-subtle fonts'>
          <div className='poke-container'>
            <div className='each-pkm-div' >
              <img className='sprite-width' src={onePoke.sprites.front_default} alt={onePoke.name}/>
            </div>
            <div className='pokemon-card'>
              <h2 className='no-margin' >{onePoke.name[0].toUpperCase() + onePoke.name.substring(1)}</h2>

              {/* National Dex No */}
              <div>
                <div>National Dex No. #{onePoke.id}</div>

              {/* Abilities */}
                <h4 className='no-marg-bott'> Abilities:</h4>
                <div className='test2'>
                  {
                    onePoke.abilities.map(poke => {
                      return(
                        <p key={Math.random()} className='details-box'>{poke.ability.name[0].toUpperCase() + poke.ability.name.substring(1)}</p>
                      )
                    })
                  }
                </div>

                {/* Flavor text */}
                <div className='no-margin no-marg-bott'>
                  <p>Description:</p>
                  <p className='max-width-flavor-text no-margin'>{onePokeFlavorText}</p>
                </div>


                {/* Measurements */}
                <div className='test2'>
                  <h4>Weight:</h4>
                  <div className='details-box'> {onePoke.weight / 10} kg </div>

                  <h4>Height: </h4>
                  <div className='details-box'> {onePoke.height / 10} m</div>
                </div>

              </div>

              {/* Type */}
              <div className='test2'>
                <h4>Type:</h4>
                {
                  onePoke.types.map(poke => {
                    return(
                      <p key={Math.random()}className='details-box'>{poke.type.name[0].toUpperCase() + poke.type.name.substring(1)}</p>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>}
      </div>
    </>
  )
}
