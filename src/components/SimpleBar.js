import { Link } from "react-router-dom"
import Pokelogo from '../assets/pokelogo.png'

export default function Simplebar() {

  return (
    <div>
      <div className='navbar-info'>
      <Link to='/'>
        <img className='pokedex-width' src={Pokelogo} alt='Pokedex logo'/>
      </Link>
      </div>
    </div>
  )
}
