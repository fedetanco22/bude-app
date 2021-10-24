import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView ,SafeAreaView } from 'react-native';
import ScreenContainer from '../../components/ScreenContainer/ScreenContainer'
import CategoriesList from '../../components/CategoriesList/CategoriesList';
import Colors from '../../constants/colors';


const logo = require("../../assets/logo-bude-letra.png");


const HomeScreen = () => {
  return (
    <ScreenContainer>
      <ScrollView style={styles.scroll}>
         <View style={styles.container}>
          <Image source={logo} style={styles.logo} />
          <View style={styles.titleContainer}>
            <Text style={styles.title}>uscando talento </Text>
            <Text style={styles.title}>cordobés?</Text>
          </View>
        </View> 
        <SafeAreaView style={styles.bg}>
          <CategoriesList />
        </SafeAreaView>
      </ScrollView >
    </ScreenContainer> 
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  scroll:{
    width: '100%',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical:15
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
    fontFamily: 'Roboto900',
    fontSize: 17,
    textTransform: "uppercase",
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