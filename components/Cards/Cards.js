import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

const Card = ({ style, children }) => {
  return <View style={{ ...styles.cardContainer, ...style }}>{children}</View>;
};

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 10,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    elevation: 5,
  },
});

export default Card;
