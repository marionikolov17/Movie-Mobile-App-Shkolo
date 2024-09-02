import { SafeAreaView, Text } from "react-native";
import AppHeader from "../../features/layout/components/AppHeader/AppHeader";
import {
  LoginButton,
  AccessToken,
} from 'react-native-fbsdk-next';
import {Settings} from 'react-native-fbsdk-next';
import { useEffect } from "react";
import auth from "@react-native-firebase/auth"

export default function Login() {
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
              console.log("err", error)
            } else if (result.isCancelled) {
              console.log("cancelled")
            } else {
              try {
                const data = await AccessToken.getCurrentAccessToken();

                const fbCredentials = auth.FacebookAuthProvider.credential(data.accessToken);

                const user = await auth().signInWithCredential(fbCredentials);
                console.log(user.additionalUserInfo)
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
