import React, { useState } from "react";
import AccountsScreen from "./app/screens/AccountsScreen";
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import ListItem from "./app/components/ListItem";
import Screen from "./app/components/Screen";
import { FlatList } from "react-native-gesture-handler";
import ListItemSeperator from "./app/components/ListItemSeperator";

const messages = [
  {
    id: 0,
    title: "Fraser",
    subTitle: "Hello World",
    image: require("./app/assets/chair.jpg"),
  },
  {
    id: 1,
    title: "Fraser",
    subTitle: "Hello World",
    image: require("./app/assets/chair.jpg"),
  },
  {
    id: 2,
    title: "Fraser",
    subTitle: "Hello World",
    image: require("./app/assets/chair.jpg"),
  },
];

const initialMessage = [
  {
    id: 4,
    title: "Fraser",
    subTitle: "Hello World",
    image: require("./app/assets/chair.jpg"),
  },
];

export default function App() {
  const [message, setMessage] = useState(initialMessage);
  const [isRefreshing, handleRefresh] = useState(false);

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(messages) => messages.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            image={item.image}
            title={item.title}
            subTitle={item.subTitle}
            onPress={() => console.log("Hello")}
          />
        )}
        ItemSeparatorComponent={ListItemSeperator}
        refreshing={isRefreshing}
        onRefresh={() =>
          setMessage([
            {
              id: 6,
              title: "Lamas",
              subTitle: "Se Poes",
              image: require("./app/assets/couch.jpg"),
            },
          ])
        }
      />
    </Screen>
  );
}
