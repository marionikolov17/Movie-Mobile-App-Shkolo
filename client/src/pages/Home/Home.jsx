import { SafeAreaView, ScrollView, Text, View } from "react-native";
import MovieList from "../../features/home/components/MovieList/MovieList";
import AppHeader from "../../features/layout/components/AppHeader/AppHeader";

export default function Home() {
    return (
        <>
            <SafeAreaView className="w-full min-h-full bg-mainBackground">
                <AppHeader />
                <ScrollView className="mb-20">
                    <MovieList />
                </ScrollView>
            </SafeAreaView>
        </>
    )
}
