import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Screen from "./app/components/Screen";
import { Button, Text } from "react-native";
import AuthNavigator from "./app/navigation/AuthNavigator";
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigation";

// const Tweets = ({ navigation }) => (
//   <Screen>
//     <Text>Tweets</Text>
//     <Button
//       title="View Tweet"
//       onPress={() => navigation.navigate("TweetDetails", { id: 1 })}
//     />
//   </Screen>
// );

// const TweetDetails = ({ route }) => (
//   <Screen>
//     <Text>Tweet Details {route.params.id}</Text>
//   </Screen>
// );

// const Stack = createStackNavigator();
// const StackNavigator = () => (
//   <Stack.Navigator
//     screenOptions={{
//       headerStyle: { backgroundColor: "dodgerblue" },
//       headerTintColor: "white",
//     }}
//   >
//     <Stack.Screen
//       options={{ headerShown: false }}
//       name="Tweets"
//       component={Tweets}
//     />
//     <Stack.Screen
//       options={({ route }) => ({ title: route.params.id })}
//       name="TweetDetails"
//       component={TweetDetails}
//     />
//   </Stack.Navigator>
// );

// const Account = () => (
//   <Screen>
//     <Text>Account</Text>
//   </Screen>
// );

// const Tab = createBottomTabNavigator();
// const TabNavigator = () => (
//   <Tab.Navigator>
//     <Tab.Screen name="Feed" component={StackNavigator} />
//     <Tab.Screen name="Account" component={Account} />
//   </Tab.Navigator>
// );

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
}
