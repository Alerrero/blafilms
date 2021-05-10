import React, { useState, useEffect } from 'react'
import './App.css'
import SearchBar from './Components/SearchBar/SearchBar'
import FilmList from './Components/FilmList/FilmList'
import ArrowWrapper from './Components/UI/ArrowWrapper'

function App() {
  const [filmsList, setFilmsList] = useState('')
  const [userInput, setUserInput] = useState('king')
  const [pageCounter, setPageCounter] = useState(1)

  const storeUserInput = (input) => {
    setUserInput(input)
    search(input, pageCounter)
  }

  const storePageCounter = (counter) => {
    setPageCounter(counter)
    search(userInput, counter)
  }

  const search = async (input, counter) => {
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=a461e386&s=${input}&page=${counter}`,
    )

    setFilmsList(await response.json())
  }

  return (
    <div className="App">
      <SearchBar storeInput={storeUserInput} />
      {!filmsList ? (
        <p>No results yet</p>
      ) : (
        <ArrowWrapper storeCounter={storePageCounter} >
          <FilmList searchResult={filmsList} />
        </ArrowWrapper>
      )}
    </div>
  )
}

export default App
