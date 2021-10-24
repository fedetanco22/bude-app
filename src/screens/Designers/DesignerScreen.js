import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
} from "react-native";
import CardList from "../../components/CardList/CardList";
import ScreenContainer from "../../components/ScreenContainer/ScreenContainer";
import Colors from "../../constants/colors";

const logo = require("../../assets/logo-bude-letra.png");

const DesignerScreen = () => {
  return (
    <ScreenContainer>
      <View style={styles.head}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Diseño Gráfico</Text>
        </View>
      </View>
      <View style={styles.bg}>
        <CardList />
      </View>
    </ScreenContainer>
  );
};
export default DesignerScreen;

const styles = StyleSheet.create({
  head: {
    justifyContent:'center',
    marginVertical:15
  },
  titleContainer: {
    alignItems: "center",
  },
  title: {
    color: Colors.white,
    fontSize: 22,
    fontFamily: 'Roboto500'
  },
  bg: {
    flex: 1,
    width: "100%",
    marginTop: 10,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor:Colors.white
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
