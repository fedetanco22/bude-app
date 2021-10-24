import React from "react";
import { StyleSheet, View, TouchableOpacity} from "react-native";
import Colors from "../../constants/colors"

const Card = ({ style, children }) => {
  return (
    <View style={{ ...styles.cardContainer, ...style }}>      
      <TouchableOpacity>
        {children}
      </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor:Colors.white,
    shadowColor:'black',
    shadowOffset:{
      width:0,
      height:2,
    },
    shadowOpacity:0.25,
    shadowRadius:6,
    elevation:5,
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
    borderBottomRightRadius:5,
    borderBottomLeftRadius:5,
    marginVertical:5,
  },
});

export default Card;
