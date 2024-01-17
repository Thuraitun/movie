import { Header, MoviesList } from "../../components"

const Popular = () => {
  const url = "https://api.themoviedb.org/3/movie/popular?api_key=a02fd78f6ea2e63062e239b480a951bd&language=en-US"
  return (
    <>
      <Header />
      <MoviesList url={url} title="Popular Movies" />
    </>
  )
}

export default Popular
