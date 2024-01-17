import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

const Detail = () => {
    const { id } = useParams()
    const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=a02fd78f6ea2e63062e239b480a951bd&language=en-US`

    const [ movie, setMovie ] = useState({})

    useEffect(() => {
      getDetail()
    }, [id])

    const getDetail = async () => {
      const { data } = await axios.get(URL)
      // const detailMovie = await data.results
      setMovie(data)
      console.log(data)
    }

  return (
    <section className="max-w-[1500px] mx-auto">
        { movie &&
          <div className="">
            <div className="my-10 flex justify-end">
              <Link to="/" className="bg-red-500 text-white px-4 py-1">
                Back
              </Link>
            </div>
            <div className="grid grid-cols-2 text-red-500 p-4 gap-6">
              <div className="flex justify-end">
                <img className="w-[500px]" src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />
              </div>
              <div className="">
                <h1 className="text-xl font-bold">{movie?.original_title}</h1>
                <h1 className="">{movie?.overview}</h1>
              </div>
            </div>
          </div>
        }
    </section>
  )
}

export default Detail
