import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Card from "../../components/Card/Card"

const Search = () => {
    const { title } = useParams()

    const url = `https://api.themoviedb.org/3/search/movie?api_key=a02fd78f6ea2e63062e239b480a951bd&language=en-US&query=${title}&page=1&include_adult=false`

    const [ movies, setMovies] = useState([])

    useEffect(() => {
        getSearchData()
    }, [title])

    const getSearchData = async () => {
        const { data } = await axios.get(url)
        const moviesData = await data.results   
        setMovies(moviesData)     
    }
  return (
    <div className="max-w-[1500px] mx-auto my-10">
      <h1 className="text-2xl text-red-500 mb-6">Search result for "<span className="text-white">{title}</span>"</h1>
      <div className="grid grid-cols-7 gap-6">
        { movies && 
            movies.map(movie => (
                <Card key={movie.id} movie={movie} />
            ))
        }
      </div>
    </div>
  )
}

export default Search
