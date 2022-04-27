import React from 'react';
import { Image, StyleSheet, ScrollView, TextInput, Button, Pressable} from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View} from '../components/Themed';
import { RootTabScreenProps } from '../types';
import BackButton from '../components/BackButton';
import MapView from 'react-native-maps';

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
    <View style={styles.container}>
    <BackButton goBack={() => navigation.navigate('Dashboard') } />
    {/* TODO: Cambiar ruta a Specialty */}
        <View style={[styles.item]}> 
        <Pressable
            style={[ styles.iconBox ]}>

            <Image style={styles.icon} source={require('../assets/images/dr.png')}/>

            <Text style={styles.name}>{data.name}</Text>
            <Text style={styles.review}>{data.review}</Text>
            <Text style={styles.location}>{data.location}</Text>
        </Pressable>

            <Text style={styles.about}>About {data.name}</Text>
            <Text style={styles.aboutinfo}>{data.info}</Text>
            <Text style={styles.workinghours}>Working Hours</Text>
            <Text style={styles.dayshours}>{data.days}, {data.hours}</Text>
            <Text style={styles.reviews}>Reviews</Text>
            <Text style={styles.seereviews}>See reviews</Text>

            <Text style={styles.locationname}>Location</Text>
            <MapView
                style={styles.map}

                initialRegion={{
                    latitude: pin.latitude,
                    longitude: pin.longitude,
                    latitudeDelta: pin.latitudeDelta,
                    longitudeDelta: pin.longitudeDelta,
            }}/>

            <Pressable onPress={() => navigation.navigate('Booking')} style={styles.btn}>
                <Text style={styles.btntext}>Book Appointment</Text>
            </Pressable>
        </View>
    </View>
    {/* <EditScreenInfo path="/screens/Dashboard.tsx" /> */}
    </ScrollView>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: '#F5F3EF',
  },
  item: {
    padding: 20,
    marginVertical: 8,
    flexDirection: "row",
    
    backgroundColor: '#C0DEDD',
    position: 'absolute',
    borderRadius: 40,
    width: 357,
    height: 136,
    left: 27.5,
    top: 100,
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
  about: {
    position: 'absolute',
    width: 180,
    height: 45,
    top: 160,
    left: 30,
    color: '#323337',
    fontSize: 24,
    fontWeight: 'bold',
  },
  aboutinfo: {
    position: 'absolute',
    width: 300,
    height: 140,
    top: 190,
    left: 30,
    color: '#323337',
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'justify',
  },
  workinghours: {
    position: 'absolute',
    width: 180,
    height: 45,
    top: 330,
    left: 30,
    color: '#323337',
    fontSize: 24,
    fontWeight: 'bold',
  },
  dayshours: {
    position: 'absolute',
    width: 300,
    height: 140,
    top: 360,
    left: 30,
    color: '#323337',
    fontSize: 14,
    lineHeight: 20,
  },
  reviews: {
    position: 'absolute',
    width: 180,
    height: 45,
    top: 400,
    left: 30,
    color: '#323337',
    fontSize: 24,
    fontWeight: 'bold',
  },
  seereviews: {
    position: 'absolute',
    width: 300,
    height: 140,
    top: 408,
    left: 250,
    color: '#323337',
    fontSize: 14,
    lineHeight: 20,
  },
  locationname: {
    position: 'absolute',
    width: 180,
    height: 45,
    top: 440,
    left: 30,
    color: '#323337',
    fontSize: 24,
    fontWeight: 'bold',
  },
  map: {
    position: 'absolute',
    width: 320,
    height: 136,
    top: 480,
    left: 20,
  },
  btn: {
    position: 'absolute',
    alignItems: 'center',
    // justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 33,
    elevation: 3,
    backgroundColor: '#22A7A7',
    width: 245,
    top: 640,
    left: 55,
  },
  btntext: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});
