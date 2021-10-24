import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import Colors from "../../constants/colors";
import Cards from "../Cards/Cards";

export default function Designer({ items }) {
  return (
    <>
      <Cards style={styles.summaryContainer}>
        <Image
          source={{
            uri: items.image.uri,
          }}
          style={styles.image}
        />
        <View style={styles.contentBox}>
          <View style={styles.content}>
            <Text style={styles.name}>{items.apellido}, {items.nombre} </Text>
            <Text style={styles.profession}>{items.profesion}</Text>
          </View>
        </View>
        <View style={styles.box}>
          <Text style={styles.profession, styles.miembro}>Miembro desde 2021</Text>
        </View>
      </Cards>
    </>
  );
}

const styles = StyleSheet.create({
  summaryContainer: {
   marginVertical:10,
   marginHorizontal:'2%',
   width:"45%",
  
  },
  image: {
    height: 130,
    width:'100%',
    flexDirection:'row',
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
  },
  contentBox:{
    borderStyle:'solid',
    borderColor: Colors.accentLight,
    borderWidth:1,
  },
  box:{
    borderStyle:'solid',
    borderColor: Colors.accentLight,
    borderWidth:1,
    borderTopWidth:0,
    paddingHorizontal:5,
    paddingVertical:7,
    borderBottomRightRadius:5,
    borderBottomLeftRadius:5
  },
  content:{
    paddingHorizontal:5,
    paddingTop:2,
    paddingBottom:7,
  },
  name:{
    fontSize:12,
    fontFamily: 'Roboto700',
    color:'#333'
  },
  profession:{
    fontSize:10,
    fontFamily: 'Roboto500',
    color:'#999'
  },
  miembro:{
    fontSize:10,
    fontFamily: 'Roboto400',
    color:'#999',
    textAlign:'right'
  },
  
});
