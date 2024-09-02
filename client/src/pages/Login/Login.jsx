import { SafeAreaView, Text } from "react-native";
import AppHeader from "../../features/layout/components/AppHeader/AppHeader";
import { LoginButton, AccessToken } from "react-native-fbsdk-next";
import { Settings } from "react-native-fbsdk-next";
import { useEffect } from "react";
import auth from "@react-native-firebase/auth";
import { useDispatch } from "react-redux";
import { authenticate } from "../../entities/users/reducers/userSlice";
import { useNavigation } from "@react-navigation/native";

export default function Login() {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    Settings.setAdvertiserTrackingEnabled(true);
    Settings.initializeSDK();
  }, []);

  return (
    <>
      <SafeAreaView className="w-full h-full flex flex-col items-center bg-mainBackground">
        <AppHeader />
        <Text
          style={{ fontFamily: "MontserratBold" }}
          className="my-4 text-2xl"
        >
          Log In
        </Text>
        <LoginButton
          onLoginFinished={async (error, result) => {
            if (error) {
              console.log("err", error);
            } else if (result.isCancelled) {
              console.log("cancelled");
            } else {
              try {
                const data = await AccessToken.getCurrentAccessToken();

                const fbCredentials = auth.FacebookAuthProvider.credential(
                  data.accessToken
                );

                const user = await auth().signInWithCredential(fbCredentials);
                const obj = {
                  profile: user.additionalUserInfo.profile
                }
                console.log(user);
                dispatch(authenticate(obj));
                return navigation.navigate("Home")
              } catch (error) {
                console.log("login err", error);
              }
            }
          }}
        />
      </SafeAreaView>
    </>
  );
}
