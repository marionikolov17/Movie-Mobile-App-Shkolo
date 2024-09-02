import { Image, Pressable, Text, View } from "react-native";
import AppHeader from "../../features/layout/components/AppHeader/AppHeader";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Profile() {
    return (
        <>
            <SafeAreaView className="w-full flex flex-col items-center p-4">
                <AppHeader />
                {/* Image Section */}
                <View className="w-40 h-40 overflow-hidden flex rounded-full mt-10">
                    <Image source={require("./../../../assets/profile.jpg")} className="object-cover w-full h-full"/>
                </View>
                <Text style={{ fontFamily: "MontserratBold" }} className="text-xl mt-2">Mario Rumen Nikolov</Text>
                <Text style={{ fontFamily: "MontserratBold" }} className="text-lg text-slate-400"><Text className="text-primaryBlue">@</Text>marionikolov</Text>
                <View className="mt-8 flex flex-row items-center">
                    <Text style={{ fontFamily: "Montserrat" }} className="text-lg">Your email</Text>
                    <View className="ml-2 flex flex-row justify-center items-center py-2 px-2 rounded-lg bg-white shadow-sm">
                        <Text style={{ fontFamily: "Montserrat" }}>someone@gmail.com</Text>
                    </View>
                </View>
                <Pressable className="w-40 flex flex-row items-center justify-center mt-8 bg-white py-3 rounded-lg">
                    <Text style={{ fontFamily: "Montserrat" }} className="text-strongRed">Logout</Text>
                </Pressable>
            </SafeAreaView>
        </>
    )
}