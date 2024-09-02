import { useEffect } from "react";
import { AccessToken } from "react-native-fbsdk-next";
import auth from "@react-native-firebase/auth";
import { useDispatch } from "react-redux";
import { authenticate } from "../reducers/userSlice";

export default function useAuthenticate(navigation) {
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        const data = await AccessToken.getCurrentAccessToken();

        const fbCredentials = auth.FacebookAuthProvider.credential(
          data.accessToken
        );

        const user = await auth().signInWithCredential(fbCredentials);
        const obj = {
          profile: user.additionalUserInfo.profile,
        };
        dispatch(authenticate(obj));
        return navigation.navigate("Home");
      } catch (error) {
        return navigation.navigate("Login")
      }
    })();
  }, []);
}
