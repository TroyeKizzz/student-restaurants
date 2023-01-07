import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Card, Text, IconButton } from "react-native-paper";
import Header from "../components/Header";
import MealCard from "../components/MealCard";
import config from "../config";

const MenuScreen = ({ navigation, route }) => {
  const url = "https://fi.jamix.cloud/apps/menuservice/rest/haku/menu/";

  const [response, setResponse] = useState();
  const [menu, setMenu] = useState();
  const [day, setDay] = useState(0);

  useEffect(() => {
    fetch(
      `${url}${route.params.customerId}/${route.params.kitchenId}?lang=${
        route.params.lang === "fi" ? "fi" : "en"
      }`
    )
      .then((response) => response.json())
      .then((data) => {
        setResponse(data[0]);
        setMenu(
          data[0].menuTypes.find((m) => m.menuTypeName === "Lounas").menus[0]
            .days
        );
      });
  }, [route]);

  return (
    <View style={styles.container}>
      <Header title={response?.kitchenName || "Loading"} back />
      <ScrollView style={styles.scroll}>
        {menu && (
          <View style={styles.titleView}>
            {day > 0 && (
              <IconButton
                icon="arrow-left"
                iconColor={config.colors.main}
                mode="contained"
                size={20}
                style={styles.icon}
                onPress={() => setDay(day - 1)}
              />
            )}
            <Text variant="titleLarge">
              {`${menu[day].date.toString().substring(6)}.${menu[day].date
                .toString()
                .substring(4, 6)}.${menu[day].date
                .toString()
                .substring(0, 4)}, ${config.weekdays[menu[day].weekday - 1]}`}
            </Text>
            {day < menu.length - 1 && (
              <IconButton
                icon="arrow-right"
                iconColor={config.colors.main}
                mode="contained"
                size={20}
                style={styles.icon}
                onPress={() => setDay(day + 1)}
              />
            )}
          </View>
        )}
        {menu &&
          menu[day].mealoptions.map((meal) => (
            <MealCard meal={meal} key={meal.id} />
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
    alignContent: "center",
    justifyContent: "center",
    width: "100%",
    marginTop: 10,
    flexDirection: "row",
  },
  icon: {},
});

export default MenuScreen;
