import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Home from "../../../../pages/Home/Home";
import Profile from "../../../../pages/Profile/Profile";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            position: "absolute",
            bottom: 20,
            left: 70,
            right: 70,
            borderRadius: 15,
            height: 60,
          },
        }}
      >
        <Tab.Screen
          name="Movie"
          component={Home}
          options={{
            tabBarIcon: (props) => (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  top: 0,
                }}
              >
                <Icon
                  name="home"
                  size={20}
                  style={{
                    marginTop: 5,
                    color: props.focused ? "#5D5FEF" : "#748c94",
                  }}
                />
                <Text
                  style={{
                    fontFamily: "Montserrat",
                    color: props.focused ? "#5D5FEF" : "#748c94",
                  }}
                  className="text-sm mt-1"
                >
                  Home
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: (props) => (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  top: 0,
                }}
              >
                <Icon
                  name="user"
                  size={20}
                  style={{
                    marginTop: 5,
                    color: props.focused ? "#5D5FEF" : "#748c94",
                  }}
                />
                <Text
                  style={{
                    fontFamily: "Montserrat",
                    color: props.focused ? "#5D5FEF" : "#748c94",
                  }}
                  className="text-sm mt-1"
                >
                  Profile
                </Text>
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
}
