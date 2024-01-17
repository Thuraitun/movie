import { Link } from "react-router-dom"

const Card = ({ movie }) => {
  return (
    <Link to={`/detail/${movie.id}`} className="hover:border-2 hover:border-red-500 relative hover:rotate-1 transition-all hover:scale-105">
      <img className="" src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />
      <div className="dark-ov"></div>
      <div className="absolute top-[35%] left-[35%]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-20 h-20 text-red-500">
          <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
        </svg>
      </div>
    </Link>
  )
}

export default Card
