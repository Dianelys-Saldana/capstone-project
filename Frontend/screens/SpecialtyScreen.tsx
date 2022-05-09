import React from 'react';
import { SafeAreaView, FlatList, StyleSheet, Pressable, Image, } from 'react-native';
import { RootTabScreenProps } from '../types';
import { Text, View} from '../components/Themed';
import SearchBar from "react-native-dynamic-search-bar";
// import { SearchBar } from 'react-native-elements';
import BackButton from '../components/BackButton';

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

function Item({ id, name, rating, planes, location } : 
  { id: string, name: string, rating: string, planes: string, location: string }) {
    
  return (
    <View style={styles.item}>
      <View style={styles.iconBox}>

        <Image style={styles.icon} source={require('../assets/images/dr.png')}/>

        <Text style={styles.name}>{name}</Text>
        <Text style={styles.rating}>{rating}</Text>
        <Text style={styles.planes} numberOfLines={1}>{planes}</Text>
        <Text style={styles.location}>{location}</Text>
    </View>
    </View>
  );
}

export default function Specialty({ navigation }: RootTabScreenProps<'DashboardTab'>) {
  const [selected, setSelected] = React.useState(new Map());

  const onSelect = React.useCallback(
    id => {
      const newSelected = new Map(selected);
      newSelected.set(id, !selected.get(id));
      setSelected(newSelected);
      navigation.navigate('Specialist');
    },
    [selected],
  );

  return (
    
    <SafeAreaView style={styles.container}>
      <BackButton goBack={() => navigation.navigate('Dashboard')} />
      <SearchBar
      placeholder="Search here"
      // onPress={() => alert("onPress")}
      onChangeText={(text) => console.log(text)}
      style={styles.searchBar}
    />

      <Text style={styles.specialty}>{specialtyArea.area} Specialty</Text>

      {/* <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <Item
            id={item.id}
            name={item.name}
            rating={item.rating}
            planes={item.planes}
            location={item.location}
            // selected={!!selected.get(item.id)}
            // onSelect={onSelect}
          />
        )}
        keyExtractor={item => item.id}
        // ListHeaderComponent={
        //   <SearchBar
        //     placeholder="Search here"
        //     onChangeText={(text) => console.log(text)}
        //     style={styles.searchBar}
        //   />
        // // extraData={selected}
        // }
      /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: Constants.statusBarHeight,
    backgroundColor: '#F2F0ED',
  },
  specialty: {
    // fontSize: 20,
    // fontWeight: 'bold',
    // fontFamily: 'Alata',

    position: 'absolute',
    width: 374,
    height: 91,
    top: 70,
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
  name: {
    position: 'absolute',
    width: 180,
    height: 45,
    top: 5,
    left: 120,
    color: '#323337',
    fontSize: 25,
    fontWeight: 'bold',
  },
  rating: {
    position: 'absolute',
    width: 50,
    height: 45,
    top: 11,
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
    backgroundColor: '#22A7A7',
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
