import { Image, Pressable, Text, View } from "react-native";
import AppHeader from "../../features/layout/components/AppHeader/AppHeader";
import { SafeAreaView } from "react-native-safe-area-context";

import { LoginButton } from "react-native-fbsdk-next"
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../entities/users/reducers/userSlice";
import { useNavigation } from "@react-navigation/native";

export default function Profile() {
    const user = useSelector(state => state.user);

    const dispatch = useDispatch();
    const navigation = useNavigation();

    return (
        <>
            <SafeAreaView className="w-full bg-mainBackground h-full flex flex-col items-center p-4">
                <AppHeader />
                {/* Image Section */}
                <View className="w-40 h-40 overflow-hidden flex rounded-full mt-10">
                    <Image source={require("./../../../assets/profile.jpg")} className="object-cover w-full h-full"/>
                </View>
                <Text style={{ fontFamily: "MontserratBold" }} className="text-xl mt-2">{user.profile?.name}</Text>
                <Text style={{ fontFamily: "MontserratBold" }} className="text-lg text-slate-400"><Text className="text-primaryBlue">@</Text>{user.profile?.first_name}</Text>
                <View className="my-8 flex flex-row items-center">
                    <Text style={{ fontFamily: "Montserrat" }} className="text-lg">Your email</Text>
                    <View className="ml-2 flex flex-row justify-center items-center py-2 px-2 rounded-lg bg-white shadow-sm">
                        <Text style={{ fontFamily: "Montserrat" }}>{user.profile?.email}</Text>
                    </View>
                </View>
                <LoginButton 
                    onLogoutFinished={() => {
                        dispatch(logout());
                        navigation.navigate("Login");
                    }}
                />
            </SafeAreaView>
        </>
    )
}