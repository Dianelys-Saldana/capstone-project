import React from 'react';
import { StyleSheet, ScrollView, TextInput, Button, Pressable, Touchable, SafeAreaView, FlatList} from 'react-native';
import { Text, View} from '../components/Themed';
import { RootTabScreenProps } from '../types';
import BackButton from '../components/BackButton';

const data = [
    {
        id: '1',
        patient: 'User X',
        rating: '4.5',
        review: 'The services that I received from Dr. Cruz is excellent. Dr. Cruz and the staff are friendly and ensure that I am properly informed about my health and care.',
    },
    {
        id: '2',
        patient: 'User Y',
        rating: '4.7',
        review: 'Great experience as a first timer. I barely waited to be helped when I checked in. I had a great visit so I highly recommend this clinic.',
    },
];

const dr = {
    dr: 'Dr. Cruz',
}

function Item({ id, patient, rating, review } : { id: string, patient: string, rating: string, review: string }) {
    return (
    <View style={[styles.item]}> 
        <Text style={styles.patient}>{patient}</Text>
        <Text style={styles.rating}>{rating}</Text>
        <Text style={styles.review}>{review}</Text>
    </View>
    );
}   

export default function Reviews({ navigation }: RootTabScreenProps<'DashboardTab'>) {
    
    return (
        <SafeAreaView style={styles.container}>
          <BackButton goBack={() => navigation.navigate('Specialist')} />
    
          <Text style={styles.dr}>{dr.dr}'s Reviews</Text>
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <Item
                id={item.id}
                patient={item.patient}
                rating={item.rating}
                review={item.review}
              />
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
  dr: {
    // position: 'absolute',
    width: 250,
    height: 45,
    top: 30,
    left: 40,
    color: '#323337',
    fontSize: 25,
    fontWeight: 'bold',
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
    top: 30,
  },
  patient: {
    position: 'absolute',
    width: 180,
    height: 45,
    top: 15,
    left: 30,
    color: '#323337',
    fontSize: 18,
    fontWeight: 'bold',
  },
  rating: {
    position: 'absolute',
    width: 80,
    height: 45,
    top: 16,
    left: 120,
    color: '#323337',
    fontSize: 16,
  },
  review: {
    position: 'absolute',
    width: 300,
    height: 140,
    top: 43,
    left: 30,
    color: '#323337',
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'justify',
  },
});
