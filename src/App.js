// Styles
import './App.css';

// Libs
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import axios from 'axios'

// Components
import Pagination from './components/Pagination'
import PokemonList from './components/PokemonList'
import Navbar from './components/Navbar'
import SinglePoke from './components/SinglePoke';
import Pokepage from './pages/Pokepage';

function App() {
  // Url Fetch
  const [currentUrl, setCurrentUrl] = useState('https://pokeapi.co/api/v2/pokemon/')

  // Pagination
  const [prevPage, setPrevPage] = useState()
  const [nextPage, setNextPage] = useState()

  // Array of Pokemons
  const [pokeInfo, setPokeInfo] = useState([])

  // Link to fetch a specific pokemon
  const [link, setLink] = useState('')
  const [singlePoke, setSinglePoke] = useState('')

  // Render the app, get info about pagination and the array of pokemons
  useEffect(() => {
    const fetching = async () => {
      const res = await axios.get(currentUrl)
      setPrevPage(res.data.previous)
      setNextPage(res.data.next)
      getPokemonInfo(res.data.results)
    }
    fetching()
  }, [currentUrl])


  // Map through the array, get information and display it
  const getPokemonInfo = (res) => {
    res.map(async(res) => {
      const testing = await axios.get(res.url)
      setPokeInfo(state => {
        state = [...state, testing.data]
        state.sort((a,b) => a.id > b.id ? 1 : -1)
        return state
      })
    })
  }

  // Pagination
  const goToNextPage = () => {
    setCurrentUrl(nextPage)
  }
  const goToPrevPage = () => {
    setCurrentUrl(prevPage)
  }

  // Gets the data from the search bar for the new single fetch
  const handleSubmit = (e) => {
    e.preventDefault()
    fetchingSpecific()
  }

  const onChange = (e) => {
    return (
      setLink(e.target.value)
      )}

  // Fetch a specific pokemon through the search bar, since it might not have the information, we fetch it again
  const fetchingSpecific = async () => {
    const pkm = await axios.get(`https://pokeapi.co/api/v2/pokemon/${link}`)
    setSinglePoke(pkm.data)
    console.log(pkm.data)
  }

  return (
    <>
    <div className='App'>
        <Routes>
          <Route path='/' element={
            <>
              <Navbar handleSubmit={handleSubmit} onChange={onChange}/>
              {singlePoke ? <SinglePoke singlePoke={singlePoke} /> :
              <>
                <PokemonList pokemon={pokeInfo}/>
                <Pagination goToNextPage={goToNextPage} goToPrevPage={goToPrevPage} />
              </>
              }

              {/* <Pagination goToNextPage={goToNextPage} goToPrevPage={goToPrevPage} /> */}
            </>
          } />
          <Route path='/pokepage/:id' element={<Pokepage />} pkm={pokeInfo}/>
        </Routes>

    </div>
    </>
    );
  }

export default App;
