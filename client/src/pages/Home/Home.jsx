import { SafeAreaView } from "react-native";
import { useFonts } from 'expo-font';
import MovieList from "../../features/home/components/MovieList/MovieList";

export default function Home() {
    return (
        <>
            <SafeAreaView className="w-full min-h-full bg-mainBackground">
                <MovieList />
            </SafeAreaView>
        </>
    )
}
