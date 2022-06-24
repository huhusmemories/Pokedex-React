import './Navbar.css'
import Pokelogo from '../assets/pokelogo.png'

export default function Navbar() {
  return (
    <div>
      <div className='navbar-info'>
      <img className='pokedex-width' src={Pokelogo} alt='Pokedex logo'/>
      <input className='search-field' placeholder='Search Pokemon'/>
      </div>
    </div>
  )
}
