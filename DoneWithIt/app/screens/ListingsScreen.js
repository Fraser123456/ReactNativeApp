import React from "react";
import { FlatList, StyleSheet } from "react-native";

import routes from "../navigation/routes";
import Card from "../components/Card";
import Screen from "./../components/Screen";
import colors from "../config/colors";

const listings = [
  {
    id: 1,
    title: "Red Jacket For Sale!",
    price: 100,
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "Couch!",
    price: 1000,
    image: require("../assets/couch.jpg"),
  },
];

function ListingsScreen({ navigation }) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subtitle={"$" + item.price}
            image={item.image}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
    padding: 20,
  },
});

export default ListingsScreen;
