import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StyleSheet, Text, View } from "react-native";
import { List, IconButton } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const Header = (props) => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      {props.back && (
        <IconButton
          icon="backburger"
          iconColor="white"
          size={50}
          style={styles.icon}
          onPress={() => navigation.goBack()}
        />
      )}
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#1e81b0",
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#fff",
    fontSize: 24,
    marginLeft: 10,
    marginTop: 2,
  },
  icon: {
    marginVertical: -2,
    marginRight: -5,
  },
});

export default Header;
