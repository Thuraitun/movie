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
    // const detailMovie = await data.results
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
                <h1 className="text-2xl">Genres</h1>
                <div className="flex space-x-3">
                  {movie.genres &&
                    movie.genres.map((g) => {
                      return (
                        <div className="" key={g.id}>
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
                <Link to={movie?.homepage} className="px-4 py-2 bg-red-500 text-white">
                  Watch Now
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
