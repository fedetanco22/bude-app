import React from 'react';
import { StyleSheet, View} from "react-native";
import Header from "../Header/Header"
import Colors from "../../constants/colors";
import SearchInput from "../SearchInput/SearchInput"


export default function ScreenContainer({ style, children }) {

  return (
    <View style={{ ...styles.screenContainer, ...style }}>     
      <Header/> 
      <SearchInput />    
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  screenContainer:{
    flex:1,
    width:'100%',
    backgroundColor: Colors.accentLight,
    alignItems:'center'
  }
})