import { StyleSheet, Text, useWindowDimensions, View } from "react-native";
import Header from "../components/Header";
import { List, Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import config from "../config";

const HomeScreen = () => {
  const dimensions = useWindowDimensions();
  const navigation = useNavigation();
  return (
    <View style={[styles.container]}>
      <Header title="Student restaurants" />
      {config.restaurants.map((restaurant) => (
        <List.Accordion
          title={restaurant.campus}
          description={restaurant.description}
          key={restaurant.campus}
          style={{ width: dimensions.width - 20 }}
        >
          {restaurant.kitchens.map((kitchen) => (
            <List.Item
              title={kitchen.name}
              key={kitchen.kitchenId}
              onPress={() =>
                navigation.navigate("menu", {
                  kitchenId: kitchen.kitchenId,
                  customerId: kitchen.customerId,
                  lang: kitchen.lang,
                })
              }
            />
          ))}
        </List.Accordion>
      ))}
      <Button
        mode="contained"
        buttonColor={config.colors.main}
        labelStyle={styles.buttonLabel}
        style={styles.button}
        onPress={() => navigation.navigate("closest")}
      >
        Find closest
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  button: {
    bottom: 30,
    position: "absolute",
  },
  buttonLabel: {
    fontSize: 28,
    padding: 7,
    marginBottom: 4,
  },
});

export default HomeScreen;
