import { View } from "react-native";
import Movie from "../Movie/Movie";
import { useGetAllMovies } from "../../../../entities/movies/hooks/useMovies";

export default function MovieList() {
    const { movies, isLoading, error } = useGetAllMovies();

    console.log(isLoading)

    return (
        <>
            <View className="w-full max-h-max flex flex-col items-center px-8 mt-4 mb-16">
                {movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
            </View>
        </>
    )
}