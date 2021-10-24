import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';



function Category({category}) {
  const {title, image} = category;
 const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={()=>navigation.navigate(category.screen)}>
        <Image source={image} style={styles.image}/>
      </TouchableOpacity>
      <Text style={styles.text} >{title}</Text>
    </View>
  );
}

export default Category;

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding: 5,
    alignItems:'center',
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    borderRadius: 5,
  },
  text: {
    fontFamily:"Roboto400",
    marginTop:5,
  }
});