import React from "react";
import { Image, View, Text, StyleSheet } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText/index";

function Card({ title, subtitle, image }) {
  return (
    // <View>
    //   <View style={styles.card}>
    //     <Image style={styles.image} source={require("../assets/jacket.jpg")} />
    //     <View>
    //       <Text>{title}</Text>
    //       <Text>{subtitle}</Text>
    //     </View>
    //   </View>
    // </View>
    <View style={styles.card}>
      <Image source={require(image)} />
      <AppText>{title}</AppText>
      <AppText>{subtitle}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
  },
  image: {
    height: "45%",
    width: "100%",
  },
});

export default Card;
