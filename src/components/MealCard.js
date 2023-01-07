import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { Card, List, Button } from "react-native-paper";
import config from "../config";

const MealCard = (props) => {
  const navigation = useNavigation();
  return (
    <Card style={styles.card}>
      <Card.Title
        title={props.meal.name}
        titleStyle={{ color: config.colors.main }}
        titleVariant="titleMedium"
      />
      <Card.Content>
        <List.Section>
          {props.meal.menuItems.map((item) => (
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
      <Card.Actions>
        <Button
          textColor={config.colors.main}
          onPress={() => navigation.navigate("meal", { meal: props.meal })}
        >
          Ingredients
        </Button>
      </Card.Actions>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    marginTop: 20,
    marginHorizontal: 15,
  },
});

export default MealCard;
