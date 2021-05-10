import placeholderImg from './placeholder.png'

import './FilmCard.css'

const FilmCard = ({ film }) => {
  return (
    <div key={film.imdbID} className="search-item">
      <img
        src={film.Poster === 'N/A' ? placeholderImg : film.Poster}
        alt="poster"
      />
      <div className="search-item-data">
        <div className="title">{film.Title}</div>
        <div className="meta">{`${film.Type} | ${film.Year}`}</div>
      </div>
    </div>
  )
}

export default FilmCard
