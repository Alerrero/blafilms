import { useState } from 'react'

import './SearchBar.css'

const SearchBar = (props) => {
    const [searchInput, setSearchInput] = useState('')

    const inputChangeHandler = (event) => {
        setSearchInput(event.target.value)
    }

    const searchHandler = () => {
      props.storeInput(searchInput)
    }

  return (
    <div className="search">
      <input type="text" placeholder="Search..." value={searchInput} onChange={inputChangeHandler} />
      <button onClick={searchHandler}>Search</button>
    </div>
  )
}

export default SearchBar
