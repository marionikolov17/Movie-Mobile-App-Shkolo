import { useNavigation } from "@react-navigation/native";
import { Image, Pressable, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function Movie({ movie }) {
  const navigation = useNavigation();

  return (
    <>
      <View 
        className="w-full min-h-80 bg-white shadow rounded-lg mb-4 overflow-hidden relative" 
      >
        <Pressable 
          className="absolute z-50 w-full h-full" 
          onPress={() => {
            navigation.navigate("MovieDetails", { id: movie?.id })
          }}
        ></Pressable>
        {/* Image Section */}
        <View className="w-full h-40 flex overflow-hidden justify-center items-center">
            <Image source={{ uri: movie?.imageUrl }} className="object-cover w-full h-full"/>
        </View>
        {/* Header Section */}
        <View className="mt-3 px-4 flex flex-row items-center w-full">
            <View className="grow w-1/2 flex flex-row justify-start">
                <Text className="font-bold text-xl" style={{ fontFamily: "MontserratBold" }}>{movie?.name}</Text>
            </View>
            <View className="grow w-1/2 flex flex-row justify-end">
                {Array(movie?.rating).fill(0).map((el, index) => {
                  if (index == movie?.rating - 1) {
                    return <Icon name="star" size={20} color="#FFA412" key={index}/>
                  }
                  return <Icon name="star" size={20} color="#FFA412" style={{ marginRight: 5 }} key={index}/>
                })}
            </View>
        </View>
        <Text className="mx-4 text-slate-400 text-sm" style={{ fontFamily: "Montserrat" }}>{movie?.year}</Text>
        <View className="w-full flex flex-row px-4 flex-wrap mt-4">
            {movie?.hashtags?.map((hashtag, index) => {
              return <Text className="py-1.5 px-4 bg-primaryBlue text-white rounded-lg mr-3" key={index} style={{ fontFamily: "Montserrat" }}>#{hashtag}</Text>
            })}
        </View>
        <View className="px-4">
            <Pressable 
              className="w-full flex flex-row items-center justify-center mt-4 mb-4 bg-gray-100 py-3 rounded-lg"
              onPress={() => {
                navigation.navigate("MovieDetails", { id: movie?.id })
              }}
            >
                <Text style={{ fontFamily: "Montserrat" }}>See more</Text>
            </Pressable>
        </View>
      </View>
    </>
  );
}
