import { StyleSheet, Text, useWindowDimensions, View } from "react-native";
import Header from "../components/Header";
import { List } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import config from "../config";

export default function App() {
  const dimensions = useWindowDimensions();
  const navigation = useNavigation();
  return (
    <View style={[styles.container]}>
      <Header title="Student restaurants" />
      {config.restaurants.map((restaurant) => (
        <List.Accordion
          title={restaurant.campus}
          description={restaurant.description}
          style={{ width: dimensions.width - 20 }}
        >
          {restaurant.kitchens.map((kitchen) => (
            <List.Item
              title={kitchen.name}
              onPress={() =>
                navigation.navigate("menu", {
                  kitchenId: kitchen.kitchenId,
                  customerId: kitchen.customerId,
                })
              }
            />
          ))}
        </List.Accordion>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});
