import './Navbar.css'
import Pokelogo from '../assets/pokelogo.png'
import { NavLink } from "react-router-dom";

export default function Navbar({handleSubmit, onChange}) {
  // con

  return (
    <div>
      <div className='navbar-info'>
      {/* <NavLink to='/' > */}
        <img className='pokedex-width' src={Pokelogo} alt='Pokedex logo'/>
      {/* </NavLink> */}
      <form onSubmit={handleSubmit}>
        <input
          className='search-field'
          placeholder='Search Pokemon'
          onChange={onChange}
        />
        <button className='search-button'>Search</button>
      </form>
      </div>
    </div>
  )
}
