import { ActivityIndicator, View } from "react-native";
import Movie from "../Movie/Movie";
import { useGetAllMovies } from "../../../../entities/movies/hooks/useMovies";

export default function MovieList() {
    const { movies, isLoading, error } = useGetAllMovies();

    return (
        <>
            <View className="w-full max-h-max flex flex-col items-center px-8 mt-4 mb-16">
                {isLoading && <ActivityIndicator size="small" style={{ marginTop: 10 }}/>}
                {error && <Text className="text-center text-strongRed text-lg" style={{ fontFamily: "Montserrat" }}>{error}</Text>}
                {movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
            </View>
        </>
    )
}