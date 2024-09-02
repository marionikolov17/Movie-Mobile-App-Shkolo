import { SafeAreaView, ScrollView } from "react-native";
import MovieList from "../../features/home/components/MovieList/MovieList";

export default function Home() {
    return (
        <>
            <SafeAreaView className="w-full min-h-full bg-mainBackground">
                <ScrollView>
                    <MovieList />
                </ScrollView>
            </SafeAreaView>
        </>
    )
}
