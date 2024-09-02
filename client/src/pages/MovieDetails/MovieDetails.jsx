import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/FontAwesome";
import AppHeader from "../../features/layout/components/AppHeader/AppHeader";
import { useNavigation } from "@react-navigation/native";

export default function MovieDetails() {
    const navigation = useNavigation();

    return (
        <>
            <SafeAreaView className="bg-mainBackground h-full">
                <AppHeader />
                <ScrollView className="w-full px-6">
                    <View className="w-full mt-4 mb-8">
                        <Icon 
                            name="arrow-left" 
                            size={25}
                            onPress={() => {
                                navigation.navigate("Home")
                            }}
                        />
                    </View>
                    {/* Movie Image */}
                    <View className="w-full h-44 flex items-center justify-center overflow-hidden rounded-lg bg-white shadow">
                        <Image source={require("./../../../assets/movie1.jpg")} className="w-full h-full"/>
                    </View>
                    {/* Movie Title */}
                    <Text style={{ fontFamily: "MontserratBold" }} className="pt-1 mt-4 text-2xl">Deadpool 3 <Text className="text-sm text-slate-400">(2024)</Text></Text>
                    <View className="flex flex-row items-center mt-4">
                        <Icon name="star" size={20} color="#FFA412" style={{ marginRight: 5 }}/>
                        <Icon name="star" size={20} color="#FFA412" style={{ marginRight: 5 }}/>
                        <Icon name="star" size={20} color="#FFA412" style={{ marginRight: 5 }}/>
                        <Icon name="star" size={20} color="#FFA412" style={{ marginRight: 5 }}/>
                        <Icon name="star" size={20} color="#FFA412"/>
                        <Text style={{ fontFamily: "Montserrat" }} className="text-sm text-slate-400 ml-2">(4,796)</Text>
                    </View>
                    {/* Movie Genre */}
                    <View className="w-30 py-2 px-4 rounded-lg bg-white mt-4 shadow">
                        <Text style={{ fontFamily: "Montserrat" }} className="text-sm text-center text-slate-400">
                            Genre: <Text style={{ fontFamily: "MontserratBold" }} className="text-gray-900">Action</Text>
                        </Text>
                    </View>
                    {/* Movie Resume */}
                    <Text style={{ fontFamily: "Montserrat" }} className="mt-4 text-lg">
                        Deadpool is offered a place in the Marvel Cinematic Universe by the Time Variance Authority, but instead recruits a variant of Wolverine to save his universe from extinction.
                    </Text>
                    {/* Movie Hashtags */}
                    <View className="w-full flex flex-row flex-wrap mt-4">
                        <Text className="py-1.5 px-4 bg-primaryBlue text-white rounded-lg mr-3" style={{ fontFamily: "Montserrat" }}>#Action</Text>
                        <Text className="py-1.5 px-4 bg-primaryBlue text-white rounded-lg mr-3" style={{ fontFamily: "Montserrat" }}>#Marvel</Text>
                    </View>
                    {/* Added on */}
                    <Text style={{ fontFamily: "Montserrat" }} className="mt-4 text-sm text-slate-400">Added on: 2024-07-12</Text>
                </ScrollView>
            </SafeAreaView>
        </>
    )
}