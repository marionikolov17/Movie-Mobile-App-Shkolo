import { View } from "react-native";
import Movie from "../Movie/Movie";

export default function MovieList() {
    return (
        <>
            <View className="w-full max-h-max flex flex-col items-center px-8 mt-4 mb-16">
                <Movie />
                <Movie />
                <Movie />
            </View>
        </>
    )
}