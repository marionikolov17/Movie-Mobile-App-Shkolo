import { Pressable, SafeAreaView, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import AppHeader from "../../features/layout/components/AppHeader/AppHeader";




export default function Login() {

  return (
    <>
      <SafeAreaView className="w-full h-full flex flex-col items-center bg-mainBackground">
        <AppHeader />
        <Text
          style={{ fontFamily: "MontserratBold" }}
          className="mt-4 text-2xl"
        >
          Log In
        </Text>
        <Pressable className="flex flex-row items-center mt-8 bg-[#1877F2] py-2 px-4 rounded-lg shadow">
          <Icon name="facebook" size={30} color={"white"} />
          <Text
            style={{ fontFamily: "Montserrat" }}
            className="text-white ml-4 text-lg"
          >
            Login with Facebook
          </Text>
        </Pressable>
      </SafeAreaView>
    </>
  );
}
