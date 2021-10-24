import React from 'react'
import { View , StyleSheet, FlatList, Text, Image} from 'react-native';
import Category from '../Category/Category';
import Colors from '../../constants/colors';
import HomeScreen from '../../screens/HomeScreen/HomeScreen';

const CATEGORIES = [
    {
        id: '1',  
        title: 'Web',
        image: require('../../assets/category-1.jpg'), 
        screen: 'Designer'
    },
    {
        id: '2',
        title: 'Gráfico',
        image: require('../../assets/category-2.jpg'),
        screen: 'Designer'
    },
    {
        id: '3',
        title: 'Redes',
        image: require('../../assets/category-3.jpg'),
        screen: 'Designer'
      },
    {
        id: '4',
        title: 'Ilustraciones', 
        image: require('../../assets/category-4.jpg'),
        screen: 'Designer'
            },
    {
        id: '5',
        title: 'Posters',
        image: require('../../assets/category-5.jpg'),
        screen: 'Designer'
        
    },
    {
        id: '6',
        title: 'Editorial',
        image: require('../../assets/category-6.jpg'),
        screen: 'Designer'
                
    }  
];

const Categories = () => {
  return (
    <View style={styles.container} >
      <FlatList 
        data={CATEGORIES}
        renderItem={({ item }) => <Category category={item}/>}
        numColumns={Math.ceil(CATEGORIES.length/2)}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id} 
        contentContainerStyle={styles.list}   
      />
      <View>
        <Text style={styles.title}>Lo que dicen por ahi...</Text>
        
        <View style={styles.line}>
          <Text style={styles.lineText}>La aplicación me mejoró la vida porque tuve tiempo para dedicarle a mi emprendimiento</Text>
          <Image source={require('../../assets/category-2.jpg')} style={styles.image}/>
        </View>

        <View style={styles.line}>
          <Image source={require('../../assets/2D35FA1D.jpg')} style={[styles.image, styles.borderImages]}/>
          <Text style={styles.lineText}>La aplicación me mejoró la vida porque tuve tiempo para dedicarle a mi emprendimiento</Text>
        </View>

      </View>
    </View>
  );
}

export default Categories;

const styles = StyleSheet.create({
  container: {
    margin: 20,
    width: '90%',
    justifyContent: 'center',
  },
  list: { 
    width:'100%',
    marginBottom: 20,
    justifyContent: 'center'
    
  },
  title: {
    fontSize: 20, 
    fontFamily: 'Roboto700',
    color: Colors.accentLight,
    padding: 10,
  },
  line: { 
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.pink,
    borderRadius: 10,
    marginBottom: 20,
    
  },
  lineText: {
    fontSize: 12,
    fontFamily: 'Roboto400',
    color: Colors.white,
    padding: 10,
    flex:4,
    paddingHorizontal: 20,
  },
  image: {
    width: 125,
    height: 125,
    resizeMode: 'cover',
    flex:3,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  borderImages: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  }
});