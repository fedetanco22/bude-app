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
        <View>
          <Text>{items.nombre}</Text>
          <Text>{items.apellido}</Text>
        </View>
        <View>
          <Text>{items.profesion}</Text>
        </View>
        <Button title="Ver Más" color={Colors.primary} />
      </Cards>
    </>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 150,
  },
  summaryContainer: {
    width: "40%",
    marginVertical: 10,
    padding: 20,
    marginHorizontal: 10,
  },
});
