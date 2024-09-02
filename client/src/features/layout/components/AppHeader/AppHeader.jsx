import { Text, View } from "react-native";

export default function AppHeader() {
  return (
    <>
      <View className="w-full flex flex-row items-center justify-center my-4">
        <Text
          style={{ fontFamily: "MontserratBold" }}
          className="py-1 px-3 text-lg bg-primaryBlue text-white"
        >
          M
        </Text>
        <Text
          style={{ fontFamily: "MontserratBold" }}
          className="ml-2 text-2xl"
        >
          Movie App
        </Text>
      </View>
    </>
  );
}
