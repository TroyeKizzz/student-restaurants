import { StyleSheet, Text, useWindowDimensions, View } from "react-native";
import Header from "../components/Header";
import { List } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import config from "../config";
import { useEffect, useState } from "react";
import IngredientsCard from "../components/IngredientsCard";

const MealScreen = ({ navigation, route }) => {
  const dimensions = useWindowDimensions();
  const [meal, setMeal] = useState();

  useEffect(() => setMeal(route.params.meal), [route]);
  return (
    <View style={[styles.container]}>
      <Header title={meal?.name} back />
      {meal?.menuItems.map((item) => (
        <IngredientsCard meal={item} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default MealScreen;
