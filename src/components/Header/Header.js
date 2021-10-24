import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, Image } from "react-native";
import Colors from "../../constants/colors";

const logo = require("../../assets/logo-bude.png");

const Header = () => {
  return (
    <View style={styles.head}>
      <Image source={logo} style={styles.image} />
    </View>
  );
};
export default Header;

const styles = StyleSheet.create({
  head: {
    width:'100%',
    marginTop: 36,
    backgroundColor: Colors.primary,
    paddingVertical: 5,
    alignItems:'center'
    
  },
  image: {
    width: 60,
    height: 30,
  },
});
