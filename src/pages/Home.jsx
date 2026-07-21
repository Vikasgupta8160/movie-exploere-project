import { useState, useEffect, useRef } from "react";
import MovieList from "../components/MovieList";
const Home = () => {
  
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const inputRef = useRef();

    const fetchMovies = async (query) => {
      try {
        setLoading(true);
        const response = await fetch(`http://www.omdbapi.com/?apikey=6ee1b864&s=${query}`);
        const data = await response.json();
        console.log(data);
        setMovies(data.Search || []);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching movies:", error);
        setLoading(false);
      }
    };

    useEffect(() => {
      fetchMovies("Avengers");
    }, []);

    const handleSearch = (e) => {
      e.preventDefault();
      const query = inputRef.current.value.trim();
      if(query) fetchMovies(query);
    }

    return (
      <div>
        <form onSubmit={handleSearch}>
          <input type="text" name="search" placeholder="Search for movies..." ref={inputRef} />
          <button type="submit" className="btn btn-primary">Search</button>
        </form>
        {loading ? <p>Loading...</p> : <MovieList movies={movies} />}
      </div>
    )
}

export default Home