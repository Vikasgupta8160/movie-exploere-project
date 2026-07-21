import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';

const MovieDetail = () => {

    const { id } = useParams();
    const [movie, setMovie] = useState();

    useEffect(() => {
        const fetchMovieDetail = async () => {
            try {
                const response = await fetch(`http://www.omdbapi.com/?apikey=6ee1b864&i=${id}`);
                const data = await response.json();
                setMovie(data);
            } catch (error) {
                console.error("Error fetching movie details:", error);
            }
        };

        fetchMovieDetail();
    }, [id]);

    if (!movie) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{movie.Title}</h1>
            <img src={movie.Poster} alt={movie.Title} />
            <p><strong>Year:</strong> {movie.Year}</p>
            <p><strong>Genre:</strong> {movie.Genre}</p>
            <p><strong>Release Date:</strong> {movie.Released}</p>
            <p><strong>Actors:</strong> {movie.Actors}</p>
            <p><strong>Plot:</strong> {movie.Plot}</p>
        </div>
    );
}

export default MovieDetail