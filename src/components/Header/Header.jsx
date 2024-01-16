import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import HeaderSlide from '../HeaderSlide/HeaderSlide';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Header = () => {
    const [ relatedMovies, setRelatedMovies]  = useState([])
    
    useEffect(() =>{
        getRelatedMovies()
    }, []);

    const RELATED_URL = "https://api.themoviedb.org/3/movie/top_rated?api_key=a02fd78f6ea2e63062e239b480a951bd&language=en-US"

    const getRelatedMovies = async () => {
        const { data } = await axios.get(RELATED_URL);
        const movies = await data.results
        setRelatedMovies(movies)
    }
  return (
    <section>
      <Splide options={{
        type: "loop",
        autoplay: true,
        arrows: false,
        pagination: true,
        interval: 3000,
       }}>
        {relatedMovies.map(movie => (
            <SplideSlide key={movie.title}>
                <HeaderSlide movie={movie} />
            </SplideSlide>
        ))}
      </Splide>
    </section>
  )
}

export default Header
