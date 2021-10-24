import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View, Text, Image, Button, Dimensions,TouchableOpacity } from "react-native";
import Colors from "../../constants/colors";

const logo = require("../../assets/logo-bude.png");

const WIDTH = Dimensions.get('window').width

export default function WelcomeScreen() {
const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate("Home")}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.text}>Encontrá tu diseñador</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.accentLight,
    width:'100%'
  },
  logo: {
    width:320,
    height:150,
    resizeMode: "cover",
    paddingVertical:10,
    marginBottom:5,
  },
  button:{
    alignItems: "center",
  },

  text: {
    fontFamily: "Roboto700Italic",
    fontSize: 18,
    color: Colors.white,
    letterSpacing: 1,  
    alignSelf: "flex-start",
    marginLeft:10,
  },
});
