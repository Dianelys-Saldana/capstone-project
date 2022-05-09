import React from 'react';
import { StyleSheet, ScrollView, TextInput, Button, Pressable, Touchable, SafeAreaView, FlatList, Image} from 'react-native';
import { Text, View} from '../components/Themed';
import { RootTabScreenProps } from '../types';
import BackButton from '../components/BackButton';
import { useNavigation } from '@react-navigation/native'
import SearchBar from "react-native-dynamic-search-bar";

const data = [
  {
    id: '1',
    name: 'Dr. Rivera',
    rating: '4.5',
    location: 'Mayaguez',
    phone: '787-123-4567',
    address: '15 C. Dr. Basora, Mayagüez, 00681',
    planes: 'triple-s | humana | reforma | humana | reforma',
  },
  {
    id: '2',
    name: 'Dr. Cruz',
    rating: '4.5',
    location: 'Ponce',
    phone: '787-123-4567',
    address: '15 C. Dr. Basora, Mayagüez, 00681',
    planes: 'triple-s | humana | reforma',
  },
  {
    id: '3',
    name: 'Dr. López',
    rating: '4.5',
    location: 'Mayaguez',
    phone: '787-123-4567',
    address: '15 C. Dr. Basora, Mayagüez, 00681',
    planes: 'triple-s | humana | reforma',
  },
  {
    id: '4',
    name: 'Dr. Rivera',
    rating: '4.5',
    location: 'Mayaguez',
    phone: '787-123-4567',
    address: '15 C. Dr. Basora, Mayagüez, 00681',
    planes: 'triple-s | humana | reforma | humana | reforma',
  },
  {
    id: '5',
    name: 'Dr. Cruz',
    rating: '4.5',
    location: 'Ponce',
    phone: '787-123-4567',
    address: '15 C. Dr. Basora, Mayagüez, 00681',
    planes: 'triple-s | humana | reforma',
  },
  {
    id: '6',
    name: 'Dr. López',
    rating: '4.5',
    location: 'Mayaguez',
    phone: '787-123-4567',
    address: '15 C. Dr. Basora, Mayagüez, 00681',
    planes: 'triple-s | humana | reforma',
  },
  {
    id: '7',
    name: 'Dr. Rivera',
    rating: '4.5',
    location: 'Mayaguez',
    phone: '787-123-4567',
    address: '15 C. Dr. Basora, Mayagüez, 00681',
    planes: 'triple-s | humana | reforma | humana | reforma',
  },
  {
    id: '8',
    name: 'Dr. Cruz',
    rating: '4.5',
    location: 'Ponce',
    phone: '787-123-4567',
    address: '15 C. Dr. Basora, Mayagüez, 00681',
    planes: 'triple-s | humana | reforma',
  },
  {
    id: '9',
    name: 'Dr. López',
    rating: '4.5',
    location: 'Mayaguez',
    phone: '787-123-4567',
    address: '15 C. Dr. Basora, Mayagüez, 00681',
    planes: 'triple-s | humana | reforma',
  },

];

const specialtyArea = { area: 'Ginecology',};

function Item({ id, name, rating, planes, location } : { id: string, name: string, rating: string, planes: string, location: string }) {
    const navigation = useNavigation()

    return (
      <View style={styles.item}>
      <Pressable style={styles.iconBox} onPress={() => navigation.navigate('Specialist')}>

        <Image style={styles.icon} source={require('../assets/images/dr.png')}/>
        <Text style={styles.name}>{name}</Text>
        <Image style={styles.star} source={require('../assets/images/filled-star.png')}/>
        <Text style={styles.rating}>{rating}</Text>
        <Text style={styles.planes} numberOfLines={1}>{planes}</Text>
        <Text style={styles.location}>{location}</Text>
    </Pressable>
    </View>

    );
}   

export default function Specialty({ navigation }: RootTabScreenProps<'DashboardTab'>) {
    
    return (
        <SafeAreaView style={styles.container}>
          {/* <SearchBar
          placeholder="Search here"
          // onPress={() => alert("onPress")}
          onChangeText={(text) => console.log(text)}
          style={styles.searchBar}
          /> */}
          <BackButton goBack={() => navigation.navigate('Dashboard')} />
          <Text style={styles.specialty}>{specialtyArea.area} Specialty</Text>

          <FlatList
            data={data}
            renderItem={({ item }) => (
              <Pressable>
                <Item
                id={item.id}
                name={item.name}
                rating={item.rating}
                planes={item.planes}
                location={item.location}  
                />
              </Pressable>
            )}
            keyExtractor={item => item.id}
          />
        </SafeAreaView>
      );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F3EF',
  },
  specialty: {
    // fontSize: 20,
    // fontWeight: 'bold',
    // fontFamily: 'Alata',

    // position: 'absolute',
    width: 374,
    height: 45,
    top: 10,
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 25,
    left: 60,
    color: '#323337',
  },
  item: {
    padding: 20,
    marginVertical: 8,
    flexDirection: "row",
    
    backgroundColor: '#BFD7ED',
    borderRadius: 40,
    width: 357,
    height: 136,
    left: 27.5,
    top: 30,
  },
  name: {
    position: 'absolute',
    width: 180,
    height: 45,
    top: 10,
    left: 120,
    color: '#323337',
    fontSize: 22,
    fontWeight: 'bold',
  },
  star: {
    position: 'absolute',
    width: 20,
    height: 20,
    top: 13,
    left: 255,
  },
  rating: {
    position: 'absolute',
    width: 50,
    height: 45,
    top: 14,
    left: 280,
    color: '#323337',
    fontSize: 16,
  },
  planes: {
    position: 'absolute',
    width: 200,
    height: 45,
    top: 45,
    left: 120,
    color: '#323337',
    fontSize: 16,
    overflow: 'hidden',
  },
  location: {
    position: 'absolute',
    width: 100,
    height: 45,
    top: 65,
    left: 120,
    color: '#323337',
    fontSize: 16,
  },
  iconBox: {
    height: 100,
    width: 100,
    top: 20,
    left: 20,
    padding: 20,
    borderRadius: 40,
    flexDirection: "row",
    position: 'absolute',
    backgroundColor: '#0074B7',
  },
  icon: {
    position: 'absolute',
    width: 50,
    height: 50,
    top: 23,
    left: 25,
  },
  searchBar: {
    top: 80,
    width: 357,
    borderRadius: 33,
    // position: 'absolute',
  }
});
