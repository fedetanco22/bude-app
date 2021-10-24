import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { StyleSheet, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import WelcomeScreen from "./src/screens/WelcomeScreen/WelcomeScreen";
import HomeScreen from "./src/screens/HomeScreen/HomeScreen";
import DesignerScreen from "./src/screens/Designers/DesignerScreen";
import Colors from "./src/constants/colors";
import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  
  const [loaded] = useFonts({
    Roboto900: require("./src/assets/fonts/Roboto-Black.ttf"),
    Roboto900Italic: require("./src/assets/fonts/Roboto-BlackItalic.ttf"),
    Roboto700: require("./src/assets/fonts/Roboto-Bold.ttf"),
    Roboto700Italic: require("./src/assets/fonts/Roboto-BoldItalic.ttf"),
    Roboto500: require("./src/assets/fonts/Roboto-Medium.ttf"),
    Roboto400: require("./src/assets/fonts/Roboto-Regular.ttf"),
  });

  if (!loaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <Stack.Navigator initialRouteName="Welcome">
          <Stack.Screen 
          name="Welcome" 
          component={WelcomeScreen}
          options={{
            headerShown: false,
          }} />
          <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          options={{
            headerShown: false,
          }}  />
          <Stack.Screen
          name="Designer"
          component={DesignerScreen}
          options={{
            headerShown: false,
          }}
          />
        </Stack.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}
    

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
