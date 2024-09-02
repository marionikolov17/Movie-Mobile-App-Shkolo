import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from "react";
import Navigation from "./src/features/layout/components/Navigation/Navigation";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MovieDetails from "./src/pages/MovieDetails/MovieDetails";

const Stack = createNativeStackNavigator();

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [loaded, error] = useFonts({
    Montserrat: require("./assets/fonts/Montserrat.ttf"),
    MontserratBold: require("./assets/fonts/Montserrat-Bold.ttf")
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={
          {
            headerShown: false
          }
        }
      >
        <Stack.Screen name="Home" component={Navigation}/>
        <Stack.Screen name="MovieDetails" component={MovieDetails}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
