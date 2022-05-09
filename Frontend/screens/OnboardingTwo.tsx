import React from 'react';
import { Image, StyleSheet, TextInput, Button, Pressable, ImageBackground} from 'react-native';

import { Text, View} from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function OnboardingTwo({ navigation }: RootTabScreenProps<'DashboardTab'>) {
  return (
    <Pressable style={styles.container} onPress={() => navigation.navigate('OnboardingThree')}> 
      <Image style={styles.image} source={require('../assets/images/o2.png')}/>

      <Text style={styles.title}>Schedule an {"\n"}Appointment in minutes</Text>
      <Text style={styles.parr}>Forget about waiting {"\n"}months for an appointment {"\n"}or having to wait long times.</Text>

      <Image style={styles.dot} source={require('../assets/images/dot2.png')}/>

      <Pressable style={styles.txtBox} onPress={() => navigation.navigate('SignIn')}>
        <Text style={styles.skip}>Skip</Text>
      </Pressable>

      <Pressable style={styles.txtBox} onPress={() => navigation.navigate('OnboardingThree')}>
        <Text style={styles.next}>Next</Text>
      </Pressable>

    </Pressable>    
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BFD7ED',
  },
  image: {
    position: 'absolute',
    width: 414,
    height: 350,
    left: -1,
    top: 45,
  },
  title: {
    position: 'absolute',
    fontWeight: 'bold',
    fontSize: 30,
    top: 440,
    left: 40,
    textAlign: 'center'
  },
  parr: {
    position: 'absolute',
    fontSize: 25,
    top: 550,
    left: 60,
    textAlign: 'center'
  },
  txtBox: {
    position: 'absolute',
    top: 10,
    left: 5,
  },
  next: {
    position: 'absolute',
    fontSize: 16,
    fontWeight: 'bold',
    top: 800,
    left: 300,
  },
  skip: {
    position: 'absolute',
    fontSize: 16,
    top: 800,
    left: 60,
  },
  dot: {
    position: 'absolute',
    width: 65,
    height: 65,
    top: 785,
    left: 170,
  },
})