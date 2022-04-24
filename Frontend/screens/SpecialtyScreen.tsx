import React from 'react';
import { SafeAreaView, FlatList, StyleSheet, Text, Pressable, View, Image, } from 'react-native';
import Constants from 'expo-constants';
import { RootTabScreenProps } from '../types';
import EditScreenInfo from '../components/EditScreenInfo';

const specialtyArea = 
  {
    area: 'Ginecology',
  }
;

const DATA = [
  {
    id: '1',
    name: 'Dr. Rivera',
    review: '4.5',
    location: 'Mayaguez'
  },
  {
    id: '2',
    name: 'Dr. Cruz',
    review: '4.5',
    location: 'Mayaguez'
  },
  {
    id: '3',
    name: 'Dr. López',
    review: '4.5',
    location: 'Mayaguez'
  },
  {
    id: '4',
    name: 'Dr. Rodriguez',
    review: '4.5',
    location: 'Mayaguez'
  }
];

function Item({ id, name, review, location, onSelect, selected }: 
  {id: string, name: string, review: string, location: string, onSelect: any, selected: any, }) {
    
  return (
    <View style={[styles.item]}>
      <Pressable
        // onPress={() => onSelect(id)}
        // onPress={() => navigation.navigate('SignIn')}
        style={[ styles.iconBox ]}>

        <Image style={styles.icon} source={require('../assets/images/dr.png')}/>

        <Text style={styles.name}>{name}</Text>
        <Text style={styles.review}>{review}</Text>
        <Text style={styles.location}>{location}</Text>
    </Pressable>
    </View>
  );
}

export default function Specialty({ navigation }: RootTabScreenProps<'SignIn'>) {
  const [selected, setSelected] = React.useState(new Map());

  const onSelect = React.useCallback(
    id => {
      const newSelected = new Map(selected);
      newSelected.set(id, !selected.get(id));

      setSelected(newSelected);
    },
    [selected],
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.specialty}>{specialtyArea.area} Specialty</Text>

      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <Item
            id={item.id}
            name={item.name}
            review={item.review}
            location={item.location}
            selected={!!selected.get(item.id)}
            onSelect={onSelect}
          />
        )}
        keyExtractor={item => item.id}
        extraData={selected}
      />

    <EditScreenInfo path="/screens/Specialty.tsx" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    backgroundColor: '#F2F0ED',
  },
  specialty: {
    // fontSize: 20,
    // fontWeight: 'bold',
    // fontFamily: 'Alata',

    position: 'absolute',
    width: 374,
    height: 91,
    top: 81,
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
    top: 142,
  },
  name: {
    position: 'absolute',
    width: 180,
    height: 45,
    top: 10,
    left: 140,
    color: '#323337',
    fontSize: 25,
    fontWeight: 'bold',
  },
  review: {
    position: 'absolute',
    width: 80,
    height: 45,
    top: 45,
    left: 140,
    color: '#323337',
    fontSize: 16,
  },
  location: {
    position: 'absolute',
    width: 80,
    height: 45,
    top: 65,
    left: 140,
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
});