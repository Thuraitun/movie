const HeaderSlide = ({movie}) => {
  return (
    <div className="relative">
        <img className="w-full h-screen object-cover" src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="" />
        <div className="dark-ov"></div>
        <div className="text-box"> 
            <h1 className="text-3xl font-extrabold">{movie.title}</h1>
            <p className="mb-4">{movie.overview}</p>
            <button className="px-4 p-2 bg-red-500">Watch Now</button>
        </div>
    </div>
  )
}

export default HeaderSlide
