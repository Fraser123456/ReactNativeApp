import React from "react";
import Card from "./app/components/Card";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import { View } from "react-native";

export default function App() {
  return (
    <View
      style={{
        backgroundColor: "#f8f4f4",
        padding: 20,
        paddingTop: 100,
        justifyContent: "center",
      }}
    >
      <Card
        title="Red Jacket For Sale!"
        subtitle="$100"
        image="./app/assets/jacket.jpg"
      />
    </View>
  );
}
