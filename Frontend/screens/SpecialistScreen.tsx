import React from 'react';
import { Image, StyleSheet, TouchableOpacity, ScrollView, TextInput, Button, Pressable, TouchableHighlight, TouchableWithoutFeedback} from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View} from '../components/Themed';
import { RootTabScreenProps } from '../types';
import BackButton from '../components/BackButton';
import MapView from 'react-native-maps';

const data = {
    id: '1',
    name: 'Dr. Cruz',
    rating: '4.5',
    address: 'Centro Caribe, 2053 Ponce Bypass Suite 101, Ponce, 00730',
    info: 'Dr. Angela Cruz has over 15 years of experience in Obstetrics & Gynecology. Angela M.  Cruz, MD earned a degree of Medicine at St. George’s University and is licensed by the American Board of Obstetrics and Gynecology.',
    days: 'Mon - Fri',
    hours: '8:00 AM - 5:00 PM',
    phone: '787-123-4567'
};

const pin = {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
};

export default function Specialist({ navigation }: RootTabScreenProps<'DashboardTab'>) {

  return (
    // <ScrollView showsVerticalScrollIndicator={false}> 
    <View style={styles.container}>
    <BackButton goBack={() => navigation.navigate('Specialty') } />
    {/* TODO: Cambiar ruta a Specialty */}
        <View style={[styles.item]}> 
        
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Chat')}>
          <View style={styles.sendView}>
            <Image style={styles.send} source={require('../assets/images/send.png')}/>
          </View>
        </TouchableWithoutFeedback>

        <Pressable
            style={[ styles.iconBox ]}>
            <Image style={styles.icon} source={require('../assets/images/dr.png')}/>

            <Text style={styles.name}>{data.name}</Text>
            <Text style={styles.phone}>{data.phone}</Text>
            <Text style={styles.address} numberOfLines={2}>{data.address}</Text>
        </Pressable>

            <Text style={styles.about}>About {data.name}</Text>
            <Text style={styles.aboutinfo}>{data.info}</Text>
            <Text style={styles.workinghours}>Working Hours</Text>
            <Text style={styles.dayshours}>{data.days}, {data.hours}</Text>

            <Text style={styles.rating}>{data.rating}</Text>
            <Image style={styles.ratingIcon} source={require('../assets/images/filled-star.png')}/>
            <Image style={styles.ratingIcon} source={require('../assets/images/filled-star.png')}/>
            <Image style={styles.ratingIcon} source={require('../assets/images/filled-star.png')}/>
            <Image style={styles.ratingIcon} source={require('../assets/images/filled-star.png')}/>
            <Image style={styles.ratingIcon} source={require('../assets/images/star.png')}/>

            <Text style={styles.reviews}>Reviews</Text>
            <Text style={styles.seereviews} onPress={() => navigation.navigate('Reviews')}>See reviews</Text>

            <Text style={styles.location}>Location</Text>
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
    // </ScrollView>
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
    
    backgroundColor: '#BFD7ED',
    position: 'absolute',
    borderRadius: 40,
    width: 357,
    height: 136,
    left: 27.5,
    top: 90,
  },
  name: {
    position: 'absolute',
    width: 180,
    height: 45,
    top: 2,
    left: 120,
    color: '#323337',
    fontSize: 25,
    fontWeight: 'bold',
  },
  phone: {
    position: 'absolute',
    width: 120,
    height: 45,
    top: 35,
    left: 120,
    color: '#323337',
    fontSize: 16,
    fontWeight: 'bold',
  },
  address: {
    position: 'absolute',
    width: 190,
    height: 45,
    top: 60,
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
  sendView: {
    position: 'absolute',
    width: 40,
    height: 40,
    top: 20,
    left: 20,
    backgroundColor: '#C0DEDD',
    flexDirection: "row",
  },
  send: {
    position: 'absolute',
    width: 30,
    height: 30,
    top: 5,
    left: 270,
  },
  about: {
    position: 'absolute',
    width: 180,
    height: 45,
    top: 160,
    left: 15,
    color: '#323337',
    fontSize: 24,
    fontWeight: 'bold',
  },
  aboutinfo: {
    position: 'absolute',
    width: 325,
    height: 140,
    top: 190,
    left: 15,
    color: '#323337',
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'justify',
  },
  workinghours: {
    position: 'absolute',
    width: 250,
    height: 45,
    top: 310,
    left: 15,
    color: '#323337',
    fontSize: 24,
    fontWeight: 'bold',
  },
  dayshours: {
    position: 'absolute',
    width: 300,
    height: 140,
    top: 340,
    left: 15,
    color: '#323337',
    fontSize: 14,
    lineHeight: 20,
  },
  rating: {
    position: 'absolute',
    width: 180,
    height: 45,
    top: 390,
    left: 15,
    color: '#323337',
    fontSize: 24,
    fontWeight: 'bold',
  },
  ratingIcon: {
    // position: 'absolute',
    width: 35,
    height: 35,
    top: 365,
    left: 45,
  },
  reviews: {
    position: 'absolute',
    width: 180,
    height: 45,
    top: 445,
    left: 15,
    color: '#323337',
    fontSize: 24,
    fontWeight: 'bold',
  },
  seereviews: {
    position: 'absolute',
    width: 300,
    height: 140,
    top: 450,
    left: 260,
    color: '#323337',
    fontSize: 14,
    lineHeight: 20,
  },
  location: {
    position: 'absolute',
    width: 180,
    height: 45,
    top: 495,
    left: 15,
    color: '#323337',
    fontSize: 24,
    fontWeight: 'bold',
  },
  map: {
    position: 'absolute',
    width: 335,
    height: 136,
    top: 530,
    left: 10,
  },
  btn: {
    position: 'absolute',
    alignItems: 'center',
    // justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 33,
    elevation: 3,
    backgroundColor: '#0074B7',
    width: 245,
    top: 705,
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
