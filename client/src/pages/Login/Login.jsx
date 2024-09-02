import { ActivityIndicator, SafeAreaView, Text } from "react-native";
import AppHeader from "../../features/layout/components/AppHeader/AppHeader";
import { LoginButton, AccessToken } from "react-native-fbsdk-next";
import { Settings } from "react-native-fbsdk-next";
import { useEffect, useState } from "react";
import auth from "@react-native-firebase/auth";
import { useDispatch } from "react-redux";
import { authenticate } from "../../entities/users/reducers/userSlice";
import { useNavigation } from "@react-navigation/native";

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);

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
        {!isLoading && <LoginButton
          onLoginFinished={async (error, result) => {
            setIsLoading(true);
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
                //console.log(user);
                dispatch(authenticate(obj));
                setIsLoading(false);
                return navigation.navigate("Home")
              } catch (error) {
                console.log("login err", error);
                setIsLoading(false);
              }
            }
          }}
        />}
        {isLoading && <ActivityIndicator size="small" style={{ marginTop: 10 }}/>}
      </SafeAreaView>
    </>
  );
}
