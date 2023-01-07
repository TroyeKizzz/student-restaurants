import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";
import MenuScreen from "./src/screens/MenuScreen";
import MealScreen from "./src/screens/MealScreen";
import config from "./src/config";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator
        initialRouteName="home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="menu" component={MenuScreen} />
        <Stack.Screen name="meal" component={MealScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: config.colors.main,
    alignItems: "center",
    justifyContent: "center",
  },
});
