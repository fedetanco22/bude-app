import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  Image,
  useWindowDimensions,
} from "react-native";

import CardList from "./../../components/CardList/CardList";
import Colors from "../../constants/colors";

const logo = require("../../assets/logo-bude-letra.png");

const Home = () => {
  const windowWidth = useWindowDimensions().width;

  return (
    <>
      <View style={styles.head}>
        <Image source={logo} style={styles.logo} />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>uscando talento </Text>
          <Text style={styles.title}>cordobés?</Text>
        </View>
      </View>
      <View style={styles.bg}>
        <CardList />
      </View>
    </>
  );
};
export default Home;

const styles = StyleSheet.create({
  head: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
  },
  containerLogo: {
    height: 100,
  },
  logo: {
    height: 80,
    resizeMode: "cover",
  },

  titleContainer: {
    alignItems: "center",
    transform: [{ translateX: -15 }, { translateY: 5 }],
  },
  title: {
    color: Colors.white,
    fontSize: 17,
    fontWeight: "900",
    textTransform: "uppercase",
  },
  image: {
    height: 100,
    width: "100%",
    resizeMode: "cover",
  },
  bg: {
    flex: 1,
    width: "100%",
    padding: 20,
    backgroundColor: Colors.white,
    marginVertical: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});

/*  *export default function Cards({ style, ...props }) {
  /*  const handleSubstractItem = (id) => {
    onSubstract(id);
  }; */
/* 
  return (
    <>
      <View style={styles.card}>
        <Image source={{ uri: items.image }} style={styles.image} />
        <Text>
          {items.nombre} {items.apellido}
        </Text>
        <View>
          {/* <TouchableOpacity
            style={styles.button}
            onPress={() => handleSubstractItem(items.id)}>
            <Text style={styles.buttonText}>Delete</Text>
          </TouchableOpacity> */
/*      </View>
      </View>
    </>
  );
} */
/* 
const styles = StyleSheet.create({
  card: {
    width: "50%",
  },
  image: {
    height: 100,
    width: 50,
    resizeMode: "contain",
  },
});
*/
