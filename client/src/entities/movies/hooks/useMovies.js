import { useEffect, useState } from "react";
import * as movieService from "./../services/movie.service";

export const useGetAllMovies = () => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        (async () => {
            try {
                const response = await movieService.getAllMovies();
                const movies = await response.json();

                setMovies(movies);
            } catch (error) {
                console.log(error)
                setError(error)
            } finally {
                setIsLoading(false);
            }
        })()
    }, []);

    return { movies, isLoading, error }
}

export const useGetMovie = (id) => {
    const [movie, setMovie] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        (async () => {
            try {
                const response = await movieService.getMovie(id);
                const movie = await response.json();

                setMovie(movie);
            } catch (error) {
                setError(error)
            } finally {
                setIsLoading(false);
            }
        })()
    }, []);

    return { movie, isLoading, error }
}