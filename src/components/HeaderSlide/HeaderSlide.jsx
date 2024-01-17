const HeaderSlide = ({movie}) => {
  return (
    <div className="relative">
        <img className="w-full h-screen object-cover" src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.title} />
        <div className="dark-ov"></div>
        <div className="text-box"> 
            <h1 className="text-3xl font-extrabold mb-2">{movie.title}</h1>
            <p className="mb-4">{movie.overview}</p>
            <button className="flex space-x-3 px-4 p-3 bg-gray-900 text-red-500">
                <span className="">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
                    </svg>
                </span>
                <span className="">
                    Watch Now
                </span>
            </button>
        </div>
    </div>
  )
}

export default HeaderSlide
