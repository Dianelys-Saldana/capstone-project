import React, { useState } from 'react';
import { Image, StyleSheet, TextInput, Button, Pressable} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View} from '../components/Themed';
import { RootTabScreenProps } from '../types';

import Server from '../services/serverRoutes';
import Auth from '../services/authentication';

export default function LoginScreen({ navigation }: RootTabScreenProps<'SignIn'>) {

  const [uEmail, setEmail] = useState('');
  const [uPassword, setPassword] = useState('');

  const _onLoginPressed = async () => {

    const formData = { uEmail, uPassword };

    // fetch('http://127.0.0.1:8000/login', {
    //   method: 'GET',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json'
    //   },
    await Server.login(JSON.stringify(formData)).then((res) => {
      console.log('auth res:', JSON.stringify(res));
      console.log(formData)
      if (res.ok) {
        Auth.login(true, uEmail, uPassword);
        res.json().then((data: any) => {
          console.log(data);
          navigation &&
            navigation.navigate('Dashboard');
        });
      }
    });
  }

  return (
    <View style={styles.container}>
      {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}
      <Image style={styles.welcomeImg} source={require('../assets/images/welcome.png')}/>
      <Text style={styles.welcome}>Welcome Back!</Text>

      <Image style={styles.emailIcon} source={require('../assets/images/email.png')}/>
        <TextInput 
          style={styles.email} 
          placeholder={'Email'}
          placeholderTextColor="#0E7979"
          onChangeText={text => setEmail(text)}
          >
        </TextInput>
      
      <Image style={styles.passIcon} source={require('../assets/images/pass.png')}/>
        <TextInput 
          style={styles.pass} 
          placeholder={'Password'}
          placeholderTextColor="#0E7979"
          secureTextEntry 
          onChangeText={text => setPassword(text)}
        ></TextInput>

      <Text style={styles.forgot}>Forgot Password?</Text>
      
      <Pressable style={styles.loginBtn} onPress={_onLoginPressed}> 
        <Text style={styles.loginText}>Login</Text>
      </Pressable>

      <Pressable onPress={() => navigation.navigate('SignUp')}> 
        <Text style={styles.account}>Don't have an account? </Text>
        <Text style={styles.signUp}>Sign up!</Text>
      </Pressable>

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
  welcomeImg: {
    position: 'absolute',
    width: 414,
    height: 350,
    left: -1,
    top: 45,
  },
  welcome: {
    // fontSize: 20,
    // fontWeight: 'bold',

    // fontFamily: 'Alata',
    position: 'absolute',
    width: 374,
    height: 91,
    left: -31,
    top: 410,
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
  emailIcon: {
    position: 'absolute',
    width: 35,
    height: 35,
    left: 40,
    top: 490,
  },
  email: {
    position: 'absolute',
    width: 268,
    height: 48,
    left: 86,
    top: 483,
    
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
    width: 40,
    height: 40,
    left: 37,
    top: 550,
  },
  pass: {
    position: 'absolute',
    width: 268,
    height: 48,
    left: 86,
    top: 546,
    
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
    top: 615,

    // fontFamily: 'Actor',
    // fontStyle: 'normal',
    // fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 14,
    display: 'flex',

    color: '#2E2E41',
  },
  loginBtn: {
    position: 'absolute',
    width: 194,
    height: 50.57,
    left: 115,
    top: 660,
    backgroundColor: '#22A7A7',
    borderRadius: 30,
  },
  loginText: {
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
    left: -40,
    top: 345,
    
    // fontFamily: 'Baloo 2',
    // fontStyle: 'normal',
    // fontWeight: 400,
    fontSize: 18,
    
    color: '#2E2E41',   
  },
  signUp: {
    position: 'absolute',
    left: 155,
    top: 345,
    
    // fontFamily: 'Baloo 2',
    // fontStyle: 'normal',
    // fontWeight: 400,
    fontSize: 18,
    fontWeight: 'bold', 
    textDecorationLine: 'underline',
    
    color: '#0E7979',   
  },
});
