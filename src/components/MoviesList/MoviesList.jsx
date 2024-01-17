import axios from "axios"
import { useEffect, useState } from "react"
import Card from "../Card/Card"

const MoviesList = ({ url, title }) => {
  const [ movies, setMovies ] = useState([])

  useEffect(() => {
    getMovies()
  }, [])

  const getMovies = async () => {
    const { data } = await axios.get(url);
    const moviesData = await data.results
    setMovies(moviesData);
  }

  return (
    <div className="max-w-[1500px] mx-auto my-6">
      <div className="mb-8">
        <span className="text-3xl font-bold text-red-500  border-b-2 border-red-500 pb-2">{title}</span>
      </div>
      <div className="grid grid-cols-7 gap-6">
        { movies.length > 0 &&
          movies.map(movie => (
            <Card key={movie.id} movie={movie}/>
          ))
        }
      </div>
    </div>
  )
}

export default MoviesList
