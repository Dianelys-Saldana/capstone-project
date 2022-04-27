import React from 'react';
import { Image, StyleSheet, ScrollView, TextInput, Button, Pressable, Touchable} from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View} from '../components/Themed';
import { RootTabScreenProps } from '../types';
import BackButton from '../components/BackButton';

const data = {
    id: '1',
    name: 'Dr. Cruz',
    review: '4.5',
    location: 'Mayaguez',
    info: 'Dr. Angela Cruz has over 15 years of experience in Obstetrics & Gynecology. Angela M.  Cruz, MD earned a degree of Medicine at St. George’s University and is licensed by the American Board of Obstetrics and Gynecology.',
    days: 'Mon - Fri',
    hours: '8:00 AM - 5:00 PM',
};

const pin = {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
};

export default function Specialist({ navigation }: RootTabScreenProps<'SignIn'>) {

  return (
    <ScrollView showsVerticalScrollIndicator={false}> 
    <BackButton goBack={() => navigation.navigate('Booking') } />
    <Pressable style={styles.container} onPress={() => navigation.navigate('Reviews')}>
    
    {/* TODO: Quitar buton y que cuando presione cualquier cosa te lleve al area de reviews */}

        <Image style={styles.icon} source={require('../assets/images/Ok.png')}/>
        <Text style={styles.success}>{`Appointment Scheduled
Successfully!`}</Text>
        
    </Pressable>
    {/* <EditScreenInfo path="/screens/Dashboard.tsx" /> */}
    </ScrollView>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F3EF',
  },
  icon: {
    position: 'absolute',
    width: 150,
    height: 150,
    top: 300,
    left: 135,
  },
  success: {
    position: 'absolute',
    width: 350,
    height: 100,
    top: 460,
    // left: 30,
    color: '#323337',
    fontSize: 24,
    textAlign: 'center',
    // fontWeight: 'bold',
  },});
