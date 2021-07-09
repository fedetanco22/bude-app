import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import Colors from "../../constants/colors";
const logo = require("../../assets/logo-bude.png");

export default function WelcomeScreen({ onWelcome }) {
  const handleWelcomeScreen = () => onWelcome(false);

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.image} />
      <Button
        title="Ver Más"
        color={Colors.primary}
        onPress={handleWelcomeScreen}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: Colors.accent,
  },
  image: {
    width: 150,
    height: 75,
  },
});
