import { Header, MoviesList } from "../../components"

const Incoming = () => {
    const url = "https://api.themoviedb.org/3/movie/upcoming?api_key=a02fd78f6ea2e63062e239b480a951bd&language=en-US"
  return (
    <>
      <Header />
      <MoviesList url={url} title="Incoming Movies" />
    </>
  )
}

export default Incoming
