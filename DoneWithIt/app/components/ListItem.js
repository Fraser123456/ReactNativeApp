import React from "react";
import { Image, StyleSheet, TouchableHighlight, View } from "react-native";
import colors from "../config/colors";
import Swipeable from "react-native-gesture-handler/Swipeable";

import AppText from "./AppText";

function ListItem({
  image,
  IconComponent,
  title,
  subTitle,
  onPress,
  rendeRightActions,
}) {
  return (
    <Swipeable renderRightActions={rendeRightActions}>
      <TouchableHighlight onPress={onPress} underlayColor={colors.light}>
        <View style={styles.container}>
          {IconComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.detailsContainer}>
            <AppText style={styles.title}>{title}</AppText>
            {subTitle && <AppText style={styles.subtitle}>{subTitle}</AppText>}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: colors.white,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  title: {
    fontWeight: "500",
  },
  subtitle: {
    color: colors.medium,
  },
  detailsContainer: {
    marginLeft: 10,
    justifyContent: "center",
  },
});

export default ListItem;
