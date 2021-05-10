import FilmCard from './FilmCard'

import './FilmList.css'

const FilmList = ({ searchResult }) => {
  return (
    <div className="search-results-list">
      {searchResult.Search ? (
        searchResult.Search.map((result, idx) => (
          <FilmCard film={result} key={idx} />
        ))
      ) : (
        <p>There are no films with that name</p>
      )}
    </div>
  )
}

export default FilmList
