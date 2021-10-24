import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import Designer from "../Designer/Designer";
import Colors from "../../constants/colors";

const USERS = [
  {
    id: "1",
    nombre: "Matt",
    apellido: "Giampietro",
    profesion: "Diseñador",
    image: {
      uri: "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/855/public/media/image/2018/08/fotos-perfil-whatsapp_16.jpg?itok=iohCz0oN",
    },
  },
  {
    id: "2",
    nombre: "Agustina",
    apellido: "Romero",
    profesion: "Diseñadora",
    image: {
      uri: "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/855/public/media/image/2018/08/fotos-perfil-whatsapp_21.jpg?itok=laOs_ZZT",
    },
  },
  {
    id: "3",
    nombre: "Federico",
    apellido: "Tanco",
    profesion: "Desarrollador Web",
    image: {
      uri: "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/855/public/media/image/2018/08/fotos-perfil-whatsapp_19.jpg?itok=Gvv_GabL",
    },
  },
  {
    id: "4",
    nombre: "Camila",
    apellido: "Bosch",
    profesion: "Diseñadora",
    image: {
      uri: "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/855/public/media/image/2018/08/fotos-perfil-whatsapp_19.jpg?itok=Gvv_GabL",
    },
  },
  {
    id: "5",
    nombre: "Dario",
    apellido: "Viada",
    profesion: "Desarrollador Web",
    image: {
      uri: "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/855/public/media/image/2018/08/fotos-perfil-whatsapp_19.jpg?itok=Gvv_GabL",
    },
  },
  {
    id: "6",
    nombre: "Alejandro",
    apellido: "Gomez",
    profesion: "Diseñador",
    image: {
      uri: "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/855/public/media/image/2018/08/fotos-perfil-whatsapp_19.jpg?itok=Gvv_GabL",
    },
  },
  {
    id: "7",
    nombre: "Maria",
    apellido: "Fernandez",
    profesion: "Diseñadora",
    image: {
      uri: "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/855/public/media/image/2018/08/fotos-perfil-whatsapp_19.jpg?itok=Gvv_GabL",
    },
  },
  {
    id: "8",
    nombre: "Mary",
    apellido: "Anne",
    profesion: "Desarrolladora Web",
    image: {
      uri: "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/855/public/media/image/2018/08/fotos-perfil-whatsapp_19.jpg?itok=Gvv_GabL",
    },
  },
];
const numColumns = 2

export default function CardList() {
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.flatList}
        data={USERS}
        renderItem={({ item }) => <Designer items={item} />}
        key={'#'}
        keyExtractor={(item) => "#" + item.id}
        horizontal={false}
        numColumns={2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   width:'100%',
   paddingHorizontal: 25,
   marginTop:15,
  },
});
