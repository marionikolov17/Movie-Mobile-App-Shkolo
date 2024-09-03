import { NavigationContainer, useNavigation } from "@react-navigation/native";
import {PermissionsAndroid, Linking} from 'react-native';
import { Provider } from "react-redux";
import { useFonts } from "expo-font";
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import messaging from "@react-native-firebase/messaging";

import Navigation from "./src/features/layout/components/Navigation/Navigation";
import MovieDetails from "./src/pages/MovieDetails/MovieDetails";
import Login from "./src/pages/Login/Login";
import store from "./store";

const Stack = createNativeStackNavigator();

SplashScreen.preventAutoHideAsync();

const NAVIGATION_IDS = ['home', 'movieDetails'];

function buildDeepLinkFromNotificationData(data) {
  const navigationId = data?.navigationId;
  if (!NAVIGATION_IDS.includes(navigationId)) {
    console.warn('Unverified navigationId', navigationId)
    return null;
  }
  if (navigationId === 'home') {
    return 'myapp://home';
  }
  const movieId = data?.movieId;
  if (typeof movieId === 'string') {
    return `myapp://movieDetails/${movieId}`
  }
  console.warn('Missing movieId')
  return null
}

const linking = {
  prefixes: ['myapp://'],
  config: {
    initialRouteName: 'Home',
    screens: {
      Home: 'home',
      MovieDetails: 'movieDetails/:id',
    }
  },
  async getInitialURL() {
    const url = await Linking.getInitialURL();
    if (typeof url === 'string') {
      return url;
    }
    //getInitialNotification: When the application is opened from a quit state.
    const message = await messaging().getInitialNotification();
    const deeplinkURL = buildDeepLinkFromNotificationData(message?.data);
    if (typeof deeplinkURL === 'string') {
      return deeplinkURL;
    }
  },
  subscribe(listener) {
    const onReceiveURL = ({url}) => listener(url);

    // Listen to incoming links from deep linking
    const linkingSubscription = Linking.addEventListener('url', onReceiveURL);

    //onNotificationOpenedApp: When the application is running, but in the background.
    const unsubscribe = messaging().onNotificationOpenedApp(remoteMessage => {
      const url = buildDeepLinkFromNotificationData(remoteMessage.data)
      if (typeof url === 'string') {
        listener(url)
      }
    });

    return () => {
      linkingSubscription.remove();
      unsubscribe();
    };
  },
}

export default function App() {
  const [loaded, error] = useFonts({
    Montserrat: require("./assets/fonts/Montserrat.ttf"),
    MontserratBold: require("./assets/fonts/Montserrat-Bold.ttf")
  });

  /* Request notifications permissions */
  useEffect(() => {
    async function requestUserPermission() {
      PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);
      const authStatus = await messaging().requestPermission();
      const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;
    
      if (enabled) {
        console.log('Authorization status:', authStatus);
      }
    }

    requestUserPermission();
  }, [])

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <Provider store={store}>
      <NavigationContainer linking={linking}>
        <Stack.Navigator
          screenOptions={
            {
              headerShown: false
            }
          }
        >
          <Stack.Screen name="Home" component={Navigation}/>
          <Stack.Screen name="MovieDetails" component={MovieDetails}/>
          <Stack.Screen name="Login" component={Login}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
