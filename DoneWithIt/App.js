import React, { useState } from "react";
import AccountsScreen from "./app/screens/AccountsScreen";
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import ListItem from "./app/components/ListItem";
import Screen from "./app/components/Screen";
import { FlatList } from "react-native-gesture-handler";
import ListItemSeperator from "./app/components/ListItemSeperator";
import MessagesScreen from "./app/screens/MessagesScreen";
import ListItemDeleteAction from "./app/components/ListItemDeleteAction";

export default function App() {
  return <ListingEditScreen />;
}
