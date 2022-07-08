import React from 'react'
import './SinglePoke.css'
import { Link } from "react-router-dom";
import './Navbar.css'


export default function SinglePoke({singlePoke: pkm}) {
  return (
    <div>
      <Link className='poke-title' to={`/pokepage/${pkm.id}`}>
        <div className='clickable' key={pkm.id}>
            <div className='each-pkm-div' >
              <img src={pkm.sprites.front_default} alt={pkm.name}/>
            </div>
            <p className='no-margin'>#{pkm.id}</p>
            <p className='no-margin margin-bottom poke-name'>{pkm.name[0].toUpperCase() + pkm.name.substring(1)}</p>
        </div>
      </Link>
    </div>
  )
}
