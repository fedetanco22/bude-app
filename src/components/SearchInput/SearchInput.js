import React from 'react'
import { StyleSheet, View, TextInput, Text, TouchableOpacity} from 'react-native'
import Colors from '../../constants/colors'


export default function SearchInput({placeholder}) {
  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.textInput}
        placeholder='Búsqueda'
        value=""
       />
       <TouchableOpacity>
        <Text style={styles.text}>Cancelar</Text>
      </TouchableOpacity>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    alignItems:'center',
    backgroundColor: Colors.primaryLight,
    width:'100%',
    padding:7,
  },
  textInput:{
    width:'80%',
    backgroundColor: Colors.white,
    borderRadius:5,
    paddingHorizontal:5,
  },
  text:{
    paddingHorizontal:10,
    fontFamily:'Roboto500',
    fontSize:15,
    color: Colors.accentLight,
  }
})