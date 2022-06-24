// Styles
import './App.css';

// Libs
import { useState, useEffect } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import axios from 'axios'

// Components
import Pagination from './components/Pagination'
import PokemonList from './components/PokemonList'
import Navbar from './components/Navbar'


function App() {
  const [currentUrl, setCurrentUrl] = useState('https://pokeapi.co/api/v2/pokemon/')
  const [prevPage, setPrevPage] = useState()
  const [nextPage, setNextPage] = useState()
  const [pokeInfo, setPokeInfo] = useState([])


  useEffect(() => {
    const fetching = async () => {
      const res = await axios.get(currentUrl)
      setPrevPage(res.data.previous)
      setNextPage(res.data.next)
      getPokemonInfo(res.data.results)
    }
    fetching()
  }, [currentUrl])


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

  const goToNextPage = () => {
    setCurrentUrl(nextPage)
  }

  const goToPrevPage = () => {
    setCurrentUrl(prevPage)
  }

  return (
    <>
    <div className='App'>
      <Navbar />
        <Routes>
          <Route path='/' element={
            <>
              <PokemonList pokemon={pokeInfo}/>
              <Pagination goToNextPage={goToNextPage} goToPrevPage={goToPrevPage} />
            </>
          } />
        </Routes>

    </div>
    </>
    );
  }

export default App;
