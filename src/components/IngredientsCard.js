import { StyleSheet } from "react-native";
import { Card, Text, Button } from "react-native-paper";
import config from "../config";

const IngredientsCard = (props) => {
  return (
    <Card style={styles.card}>
      <Card.Title
        title={props.meal.name}
        titleStyle={{ color: config.colors.main }}
        titleVariant="titleMedium"
      />
      <Card.Content>
        <Text style={styles.diets}>{props.meal.diets}</Text>
        <Text>
          {props.meal.ingredients
            .replace("<strong>", "")
            .replace("</strong>", "")}
        </Text>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    marginTop: 20,
    marginHorizontal: 15,
  },
  diets: {
    fontWeight: "800",
  },
});

export default IngredientsCard;
