import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=a02fd78f6ea2e63062e239b480a951bd&language=en-US`;

  const [movie, setMovie] = useState({});

  useEffect(() => {
    getDetail();
  }, [id]);

  const getDetail = async () => {
    const { data } = await axios.get(URL);
    setMovie(data);
    console.log(data)
  };

  return (
    <section className="max-w-[1500px] mx-auto p-6">
      {!!movie?.poster_path && (
        <div className="">
          <div className="my-10 flex justify-end">
            <Link to="/" className="bg-red-500 text-white px-4 py-1">
              Back
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 text-red-500 gap-10 items-center">
            <div className="flex md:justify-end">
              <img
                className="w-[450px]"
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt={movie.title}
              />
            </div>
            <div className="space-y-6">
              <div className="mb-3">
                <h1 className="text-2xl">Title</h1>
                <p className="italic">{movie?.original_title} - ({movie?.title})</p>
              </div>

              <div className="mb-3">
                <h1 className="text-2xl">Overview</h1>
                <p className="italic">{movie?.overview}</p>
              </div>

              <div className="mb-3">
                <h1 className="text-2xl">Run Time</h1>
                <p className="italic">{movie?.runtime} min</p>
              </div>

              <div className="mb-3">
                <h1 className="text-2xl mb-2">Genres</h1>
                <div className="flex space-x-3">
                  {movie.genres &&
                    movie.genres.map((g) => {
                      return (
                        <div className="bg-red-500 text-white px-3 py-[2px]" key={g.id}>
                          <p className="italic">{g?.name}</p>
                        </div>
                      );
                    })}
                </div>
              </div>

              <div className="mb-3">
                <h1 className="text-2xl">Popularity</h1>
                <p className="italic">{(movie?.popularity / 1000).toFixed(2)}K</p>
              </div>
              
              <div className="mb-3">
                <h1 className="text-2xl">Released Date</h1>
                <p className="italic">{movie?.release_date}</p>
              </div>
              
              <div className="mb-3">
                <Link to={movie?.homepage} className="px-4 py-2 border border-red-500  inline-block">
                  <div className="flex space-x-2">
                  <span className="">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-red-500">
                      <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="">Watch Now</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Detail;
