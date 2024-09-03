import { SafeAreaView, ScrollView, Text, View } from "react-native";
import MovieList from "../../features/home/components/MovieList/MovieList";
import AppHeader from "../../features/layout/components/AppHeader/AppHeader";
import { useNavigation } from "@react-navigation/native";
import useAuthenticate from "../../entities/users/hooks/useAuthenticate";

export default function Home() {
  const navigation = useNavigation();

  useAuthenticate(navigation);

  return (
    <>
      <SafeAreaView className="w-full min-h-full bg-mainBackground">
        <AppHeader />
        <ScrollView className="mb-20">
          <MovieList />
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
