import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Card, Text, List } from "react-native-paper";
import Header from "../components/Header";
import config from "../config";

const MenuScreen = ({ navigation, route }) => {
  const url = "https://fi.jamix.cloud/apps/menuservice/rest/haku/menu/";

  const [response, setResponse] = useState();
  const [menu, setMenu] = useState();

  useEffect(() => {
    fetch(`${url}${route.params.customerId}/${route.params.kitchenId}`)
      .then((response) => response.json())
      .then((data) => {
        setResponse(data[0]);
        setMenu(
          data[0].menuTypes.find((m) => m.menuTypeName === "Lounas").menus[0]
            .days[0]
        );
      });
  }, [route]);

  return (
    <View style={styles.container}>
      <Header title={response?.kitchenName || "Loading"} back />
      <ScrollView style={styles.scroll}>
        <View style={styles.titleView}>
          {menu && (
            <Text variant="titleLarge">{`${menu.date
              .toString()
              .substring(6)}.${menu.date.toString().substring(4, 6)}.${menu.date
              .toString()
              .substring(0, 4)}, ${config.weekdays[menu.weekday - 1]}`}</Text>
          )}
        </View>
        {menu?.mealoptions.map((meal) => (
          <Card style={styles.card}>
            <Card.Title title={meal.name} titleStyle={{ color: "#1e81b0" }} />
            <Card.Content>
              <List.Section>
                {meal.menuItems.map((item) => (
                  <List.Item
                    title={item.name}
                    description={item.diets}
                    left={() => (
                      <List.Icon
                        icon={item.orderNumber === 1 ? "food" : "food-variant"}
                      />
                    )}
                  />
                ))}
              </List.Section>
            </Card.Content>
          </Card>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  scroll: {
    width: "100%",
  },
  titleView: {
    alignItems: "center",
    width: "100%",
    marginTop: 10,
  },
  card: {
    marginTop: 20,
    marginHorizontal: 15,
  },
});

export default MenuScreen;
