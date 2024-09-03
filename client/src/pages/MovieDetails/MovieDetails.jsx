import { ActivityIndicator, Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/FontAwesome";
import AppHeader from "../../features/layout/components/AppHeader/AppHeader";
import { useNavigation } from "@react-navigation/native";
import { useGetMovie } from "../../entities/movies/hooks/useMovies";

export default function MovieDetails({ route }) {
  const { id } = route.params;
  const navigation = useNavigation();

  const { movie, isLoading, error } = useGetMovie(id);

  return (
    <>
      <SafeAreaView className="bg-mainBackground h-full">
        <AppHeader />
        {isLoading && <ActivityIndicator size="small" style={{ marginTop: 10 }}/>}
        {error && <Text className="text-center text-strongRed text-lg" style={{ fontFamily: "Montserrat" }}>{error}</Text>}
        <ScrollView className="w-full px-6">
          <View className="w-full mt-4 mb-8">
            <Icon
              name="arrow-left"
              size={25}
              onPress={() => {
                navigation.navigate("Home");
              }}
            />
          </View>
          {/* Movie Image */}
          <View className="w-full h-44 flex items-center justify-center overflow-hidden rounded-lg bg-white shadow">
            {movie?.imageUrl != null ? <Image
              source={{ uri: movie?.imageUrl }}
              className="w-full h-full"
            /> : null}
          </View>
          {/* Movie Title */}
          <Text
            style={{ fontFamily: "MontserratBold" }}
            className="pt-1 mt-4 text-2xl"
          >
            {movie?.name}{" "}
            <Text className="text-sm text-slate-400">({movie?.year})</Text>
          </Text>
          <View className="flex flex-row items-center mt-4">
            {Array(movie?.rating)
              .fill(0)
              .map((el, index) => {
                if (index == movie?.rating - 1) {
                  return (
                    <Icon name="star" size={20} color="#FFA412" key={index} />
                  );
                }
                return (
                  <Icon
                    name="star"
                    size={20}
                    color="#FFA412"
                    style={{ marginRight: 5 }}
                    key={index}
                  />
                );
              })}
            <Text
              style={{ fontFamily: "Montserrat" }}
              className="text-sm text-slate-400 ml-2"
            >
              ({movie?.totalVotes})
            </Text>
          </View>
          {/* Movie Genre */}
          <View className="w-30 py-2 px-4 rounded-lg bg-white mt-4 shadow">
            <Text
              style={{ fontFamily: "Montserrat" }}
              className="text-sm text-center text-slate-400"
            >
              Genre:{" "}
              <Text
                style={{ fontFamily: "MontserratBold" }}
                className="text-gray-900"
              >
                {movie?.genre}
              </Text>
            </Text>
          </View>
          {/* Movie Resume */}
          <Text style={{ fontFamily: "Montserrat" }} className="mt-4 text-lg">
            {movie?.resume}
          </Text>
          {/* Movie Hashtags */}
          <View className="w-full flex flex-row flex-wrap mt-4">
            {movie?.hashtags?.map((hashtag, index) => {
              return (
                <Text
                  className="py-1.5 px-4 bg-primaryBlue text-white rounded-lg mr-3"
                  key={index}
                  style={{ fontFamily: "Montserrat" }}
                >
                  #{hashtag}
                </Text>
              );
            })}
          </View>
          {/* Added on */}
          <Text
            style={{ fontFamily: "Montserrat" }}
            className="mt-4 text-sm text-slate-400"
          >
            Added on: {movie?.createdAt}
          </Text>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
