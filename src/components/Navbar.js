import './Navbar.css'
import Pokelogo from '../assets/pokelogo.png'
import { NavLink } from "react-router-dom";

export default function Navbar({handleSubmit, onChange}) {

  const refreshPage = () => {
    window.location.reload(false)
  }

  return (
    <div>
      <div className='navbar-info'>
      <NavLink to='/' onClick={refreshPage}>
        <img className='pokedex-width' src={Pokelogo} alt='Pokedex logo'/>
      </NavLink>
      <form onSubmit={handleSubmit}>
        <input
          className='search-field'
          placeholder='Search Pokemon, E.g: Bulbasaur'
          onChange={onChange}
        />
        <button className='search-button'>Search</button>
      </form>
      </div>
    </div>
  )
}
