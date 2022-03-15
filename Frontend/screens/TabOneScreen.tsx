import React from 'react';
import { Image, StyleSheet, TextInput, Button, Pressable} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View} from '../components/Themed';
import { RootTabScreenProps } from '../types';


export default function TabOneScreen({ navigation }: RootTabScreenProps<'SignIn'>) {
  return (
    <View style={styles.container}>
      {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}
      <Image style={styles.welcome} source={require('../assets/images/welcome.png')}/>
      <Text style={styles.title}>Welcome Back!</Text>

      <Image style={styles.emailIcon} source={require('../assets/images/email.png')}/>
      <TextInput style={styles.email} placeholder={'Email'}></TextInput>
      
      <Image style={styles.passIcon} source={require('../assets/images/pass.png')}/>
      <TextInput style={styles.pass} placeholder={'Password'}></TextInput>
      <Text style={styles.forgot}>Forgot Password?</Text>
      
      <Pressable style={styles.login} onPress={() => navigation.navigate('Dashboard')}> 
        <Text style={styles.text}>Login</Text>
      </Pressable>

      <Text style={styles.account}>Don't have an account? Sign up!</Text>

      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#C0DEDD',
  },
  title: {
    // fontSize: 20,
    // fontWeight: 'bold',

    // fontFamily: 'Alata',
    position: 'absolute',
    width: 374,
    height: 91,
    left: -31,
    top: 396,
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 36,
    lineHeight: 50,
    textAlign: 'center',
    color: '#0E7979',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  welcome: {
    position: 'absolute',
    width: 414,
    height: 320,
    left: -1,
    top: 65,
  },
  emailIcon: {
    position: 'absolute',
    width: 35,
    height: 35,
    left: 40,
    top: 478,
  },
  email: {
    position: 'absolute',
    width: 268,
    height: 48,
    left: 86,
    top: 471,
    
    // fontFamily: 'Baloo 2',
    // fontStyle: 'normal',
    // fontWeight: 'bold',
    fontSize: 20,
    display: 'flex',
    alignItems: 'center',
    
    color: '#0E7979',

    borderWidth: 2.5,
    padding: 10,
    borderRadius: 8,
    borderColor: '#0E7979',
  },
  passIcon: {
    position: 'absolute',
    width: 37,
    height: 37,
    left: 40,
    top: 540,
  },
  pass: {
    position: 'absolute',
    width: 268,
    height: 48,
    left: 86,
    top: 536,
    
    // fontFamily: 'Baloo 2',
    // fontStyle: 'normal',
    // fontWeight: 'bold',
    fontSize: 20,
    display: 'flex',
    alignItems: 'center',
    
    color: '#0E7979',

    borderWidth: 2.5,
    padding: 10,
    borderRadius: 8,
    borderColor: '#0E7979',
  },
  forgot: {
    position: 'absolute',
    width: 120,
    height: 15,
    left: 235,
    top: 600,

    // fontFamily: 'Actor',
    // fontStyle: 'normal',
    // fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 14,
    display: 'flex',

    color: '#2E2E41',
  },
  login: {
    position: 'absolute',
    width: 194,
    height: 50.57,
    left: 115,
    top: 660,
    backgroundColor: '#22A7A7',
    borderRadius: 30,
  },
  text: {
    position: 'absolute',
    width: 80,
    height: 45,
    left: 65,
    top: 15,
    
    // fontFamily: 'Baloo 2',
    // fontStyle: 'normal',
    // fontWeight: 400,
    // textAlign: 'center',

    fontSize: 24,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
    
  },
  account: {
    position: 'absolute',
    width: 430,
    height: 39,
    left: -1,
    top: 725,
    
    // fontFamily: 'Baloo 2',
    // fontStyle: 'normal',
    // fontWeight: 400,
    fontSize: 18,
    lineHeight: 28,
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    
    color: '#2E2E41',   
  },
});
