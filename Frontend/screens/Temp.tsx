import React from 'react';
import { SafeAreaView, FlatList, StyleSheet, Pressable, Image, } from 'react-native';
import { RootTabScreenProps } from '../types';
import { Text, View} from '../components/Themed';
import BackButton from '../components/BackButton';

// This is the original base code untouched

const specialtyArea = 
  {
    area: 'Ginecology',
  };

const DATA = [
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
    location: 'Mayaguez',
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
  // {
  //   id: '4',
  //   name: 'Dr. Rodriguez',
  //   rating: '4.5',
  //   location: 'Mayaguez',
  //   phone: '787-123-4567',
  //   address: '15 C. Dr. Basora, Mayagüez, 00681',
  // }
];

export default function SendMessage({ navigation }: RootTabScreenProps<'SignIn'>) {
  return (
    <SafeAreaView style={styles.container}>
      <BackButton goBack={() => navigation.navigate('Dashboard')} />
      <Text style={styles.name}>Name</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: Constants.statusBarHeight,
    backgroundColor: '#F2F0ED',
  },
  name: {
    // fontSize: 20,
    // fontWeight: 'bold',
    // fontFamily: 'Alata',

    position: 'absolute',
    width: 200,
    height: 91,
    top: 70,
    left: 105,
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 30,
    lineHeight: 50,
    textAlign: 'center',
    color: '#323337',
  },
  item: {
    padding: 20,
    marginVertical: 8,
    flexDirection: "row",
    
    backgroundColor: '#C0DEDD',
    borderRadius: 40,
    width: 357,
    height: 136,
    left: 27.5,
    top: 130,
  },
});
