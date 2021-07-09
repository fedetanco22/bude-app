import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { StyleSheet, View } from "react-native";
import Colors from "./constants/colors";
import Header from "./components/Header/Header";
import Home from "./screens/Home/Home";
import WelcomeScreen from "./screens/WelcomeScreen/WelcomeScreen";

export default function App() {
  const [welcome, setWelcome] = useState(true);
  const [loaded] = useFonts({
    Roboto900: require("./assets/fonts/Roboto-Black.ttf"),
    Roboto700: require("./assets/fonts/Roboto-Bold.ttf"),
    Roboto500: require("./assets/fonts/Roboto-Medium.ttf"),
    Roboto400: require("./assets/fonts/Roboto-Regular.ttf"),
  });

  if (!loaded) {
    return <AppLoading />;
  }

  const screen = welcome ? <WelcomeScreen onWelcome={setWelcome} /> : <Home />;

  return (
    <View style={styles.container}>
      <Header />
      {screen}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.accent,
    alignItems: "center",
  },
});
