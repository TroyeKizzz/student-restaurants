import {
  ScrollView,
  StyleSheet,
  useWindowDimensions,
  View,
} from "react-native";
import Header from "../components/Header";
import { List, Text, ActivityIndicator } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
} from "expo-location";
import config from "../config";
import { useState, useEffect } from "react";
import MapView, { Marker } from "react-native-maps";

const ClosestRestaurantsScreen = () => {
  const navigation = useNavigation();
  const [location, setLocation] = useState();
  const [kitchens, setKitchens] = useState();
  const [mapRef, setMapRef] = useState();

  useEffect(() => {
    let list = [];
    config.restaurants.forEach((rest) => {
      list = list.concat(rest.kitchens);
    });
    setKitchens(list);
  }, []);

  useEffect(() => {
    (async () => {
      let { status } = await requestForegroundPermissionsAsync();
      if (status === "granted") {
        let loc = await getCurrentPositionAsync({});
        setLocation(loc);
      }
    })();
  }, []);

  useEffect(() => {
    if (location && kitchens) {
      const list = [...kitchens];
      const p = 0.017453292519943295; // Math.PI / 180
      kitchens.forEach((k, i) => {
        let a =
          0.5 -
          Math.cos((location.coords.latitude - k.coords.latitude) * p) / 2 +
          (Math.cos(k.coords.latitude * p) *
            Math.cos(location.coords.latitude * p) *
            (1 -
              Math.cos((location.coords.longitude - k.coords.longitude) * p))) /
            2;
        list[i].distance = 12742 * Math.asin(Math.sqrt(a));
      });
      const sorted = list.sort((a, b) => a.distance > b.distance);
      sorted[0].highlighted = true;
      setKitchens(sorted);
      sorted[0].markerRef.showCallout();
    }
  }, [location]);

  return (
    <View style={[styles.container]}>
      <Header title="Closest restaurants" back />
      <ScrollView style={styles}>
        <MapView
          style={styles.map}
          showsUserLocation
          ref={(map) => setMapRef(map)}
          onMapReady={() => {
            mapRef?.fitToElements();
          }}
        >
          {kitchens?.map((kitchen, index) => (
            <Marker
              ref={(marker) => {
                let list = kitchens;
                list[index].markerRef = marker;
                setKitchens(list);
              }}
              key={kitchen.name}
              coordinate={kitchen.coords}
              title={kitchen.name}
              isPreselected
              tracksViewChanges
              pinColor={kitchen.highlighted ? "green" : undefined}
            />
          ))}
        </MapView>
        <List.Section>
          {kitchens &&
            kitchens[0].distance &&
            kitchens
              .sort((a, b) => a.distance > b.distance)
              .map((kitchen) => (
                <List.Item
                  title={kitchen.name}
                  key={`${kitchen.customerId}-${kitchen.kitchenId}`}
                  onPress={() =>
                    navigation.navigate("menu", {
                      kitchenId: kitchen.kitchenId,
                      customerId: kitchen.customerId,
                      lang: kitchen.lang,
                    })
                  }
                  right={() => (
                    <Text>{`${kitchen.distance?.toFixed(1)} km`}</Text>
                  )}
                />
              ))}
          {kitchens && !kitchens[0].distance && (
            <View style={styles.activityIndicatorView}>
              <ActivityIndicator size="large" />
              <Text variant="bodyLarge">Calculating</Text>
            </View>
          )}
        </List.Section>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    width: "100%",
  },
  scrollView: {
    width: "100%",
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
  map: {
    width: "100%",
    height: 300,
  },
  activityIndicatorView: {
    alignItems: "center",
  },
});

export default ClosestRestaurantsScreen;
