import React from "react";
import { View, StyleSheet } from "react-native";

function ImageInputList({ imageUris, onAddImage, onRemoveImage }) {
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
  },
});

export default ImageInputList;
