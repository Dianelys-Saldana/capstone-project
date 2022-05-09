import React from 'react';
import { Image, StyleSheet, TextInput, Button, Pressable, ImageBackground} from 'react-native';

import { Text, View} from '../components/Themed';
import { RootTabScreenProps } from '../types';
// import AppLoading from 'expo-app-loading';
// import { useFonts } from '@expo-google-fonts/inter';

export default function OnboardingOne({ navigation }: RootTabScreenProps<'DashboardTab'>) {
  // let [fontsLoaded] = useFonts({
  //   'Alata-Regular': require('../assets/fonts/Alata-Regular.ttf'),
  //   'Baloo': require('../assets/fonts/Baloo2-VariableFont_wght.ttf'),
  // });

  // if (!fontsLoaded) {
  //   return <AppLoading />;
  // }

  return (
    <Pressable style={styles.container} onPress={() => navigation.navigate('OnboardingTwo')}> 
      <Image style={styles.image} source={require('../assets/images/o1.png')}/>

      <Text style={styles.title}>Find a Specialist {"\n"}Near you</Text>
      <Text style={styles.parr}>Find Specialists that accept your {"\n"}medical insurance near your area.</Text>

      <Image style={styles.dot} source={require('../assets/images/dot1.png')}/>

      <Pressable style={styles.txtBox} onPress={() => navigation.navigate('SignIn')}>
        <Text style={styles.skip}>Skip</Text>
      </Pressable>

      <Pressable style={styles.txtBox} onPress={() => navigation.navigate('OnboardingTwo')}>
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
    left: 90,
    textAlign: 'center',
    // fontFamily: 'Alata-Regular',
  },
  parr: {
    position: 'absolute',
    fontSize: 25,
    top: 550,
    left: 30,
    textAlign: 'center',
    // fontFamily: 'Baloo',
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