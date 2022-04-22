import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, TextInput, Pressable, Button, Dimensions, ScrollView, TouchableOpacity} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown'
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

import Server from '../services/serverRoutes';
import Auth from '../services/authentication';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Ionicons } from "@expo/vector-icons";
import { emailValidator, passwordValidator, nameValidator, lastNameValidator} from '../core/utils';

export default function SignUpScreen({ navigation }: RootTabScreenProps<'SignUp'>) {
  const [uFirstName, setName] = useState('');
  const [uLastName, setLastName] = useState('');
  const [uEmail, setEmail] = useState('');
  const [uPassword, setPassword] = useState('');
  const [usertype, setUserType] = useState('');
  const [phone, setPhone] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const users = ["Patient", "Service Provider"]

  const _onSignUpPressed = () => {

    const formData = { uFirstName, uLastName, uEmail, uPassword, usertype, phone, confirmPassword };

    fetch('http://127.0.0.1:8000/signup', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData),
    }).then((res) => {
      console.log('auth res:', JSON.stringify(res));
      console.log(formData)
      if (res.ok) {
        res.json().then((data) => {
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
      <Text style={styles.createAcc}>Create Account</Text>
      
      <Image style={styles.avatar} source={require('../assets/images/name.png')}/>
        <TextInput 
          style={styles.firstName} 
          placeholder={'First Name'}
          value={uFirstName}
          onChangeText={text => setName(text)}
          // returnKeyType="next"
          >
        </TextInput>

      <Image style={styles.avatar2} source={require('../assets/images/name.png')}/>
        <TextInput 
          style={styles.lastName} 
          placeholder={'Last Name'}
          onChangeText={text => setLastName(text)}
          // value={uLastName} -> weird glitch
          // returnKeyType="next"
        > </TextInput> 

      <Image style={styles.emailIcon} source={require('../assets/images/email.png')}/>
        <TextInput 
          style={styles.email} 
          placeholder={'Email'}
          value={uEmail}
          onChangeText={text => setEmail(text)}
          // error={!!email.error}
          // errorText={email.error}
          // returnKeyType="next"
          // autoCompleteType="email"
          // textContentType="emailAddress"
          autoCapitalize="none"
          keyboardType="email-address"
          > 
          {/* onChange={handleChange} */}
        </TextInput>

      <Image style={styles.phoneIcon} source={require('../assets/images/phone.png')}/>
        <TextInput 
          style={styles.phone}
          placeholder={'Phone'} 
          keyboardType='phone-pad'
          value={phone}
          onChangeText={text => setPhone(text)}
          // returnKeyType="next"
          > 
        </TextInput>
      
      <Image style={styles.userIcon} source={require('../assets/images/user.png')}/>
        <SelectDropdown
          data={users}
          // defaultValueByIndex={1}
          // defaultValue={'Patient'}

          onSelect={(selectedItem, index) => {
            // console.log(selectedItem, index);
            setUserType(selectedItem)
          }}
          defaultButtonText={"Select user type"}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            return item;
          }}
          buttonStyle={styles.dropdown1BtnStyle}
          buttonTextStyle={styles.dropdown1BtnTxtStyle}
          dropdownStyle={styles.dropdown1DropdownStyle}
          rowStyle={styles.dropdown1RowStyle}
          rowTextStyle={styles.dropdown1RowTxtStyle}
        />

      <Image style={styles.passIcon} source={require('../assets/images/pass.png')}/>
        <TextInput 
          style={styles.pass} 
          placeholder={'Password'} 
          secureTextEntry 
          value={uPassword}

          returnKeyType="done"
          onChangeText={text => setPassword(text)}
        > 
        </TextInput>
      
      <Image style={styles.confpassIcon} source={require('../assets/images/pass.png')}/>
        <TextInput 
          style={styles.confpass} 
          placeholder={'Confirm Password'} 
          secureTextEntry

          returnKeyType="done"
          value={confirmPassword}
          onChangeText={text => setConfirmPassword(text)}
        >
        </TextInput>
      
      <Pressable style={styles.signup} onPress={_onSignUpPressed}>
        <Text style={styles.signuptext}>Sign up</Text>
      </Pressable>

      <Pressable onPress={() => navigation.navigate('SignIn')}> 
        <Text style={styles.account}>Already have an account? </Text>
        <Text style={styles.login}>Login</Text>
      </Pressable>
      
      <EditScreenInfo path="/screens/TabTwoScreen.tsx" />
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
  createAcc: {
    // fontSize: 20,
    // fontWeight: 'bold',

    position: 'absolute',
    width: 374,
    height: 91,
    left: -31,
    top: 81,
    // fontFamily: 'Alata',
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
  firstName:{
    position: 'absolute',
    width: 268,
    height: 48,
    left: 86,
    top: 156,
    
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
  lastName:{
    position: 'absolute',
    width: 268,
    height: 48,
    left: 86,
    top: 220,
    
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
  avatar: {
    position: 'absolute',
    width: 37,
    height: 37,
    left: 40,
    top: 163,
  },
  avatar2: {
    position: 'absolute',
    width: 37,
    height: 37,
    left: 40,
    top: 225,
  },
  emailIcon: {
    position: 'absolute',
    width: 37,
    height: 37,
    left: 40,
    top: 289,
  },
  email: {
    position: 'absolute',
    width: 268,
    height: 48,
    left: 86,
    top: 284,
    
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
  phone:{
    position: 'absolute',
    width: 268,
    height: 48,
    left: 86,
    top: 346,
    
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
  phoneIcon:{
    position: 'absolute',
    width: 40,
    height: 40,
    left: 40,
    top: 350,
  },
  dropdown1BtnStyle: {
    position: 'absolute',
    width: 268,
    height: 48,
    left: 86,
    top: 408,

    backgroundColor: '#C0DEDD',
    borderRadius: 8,
    borderWidth: 2.5,
    borderColor: '#0E7979',
  },
  dropdown1BtnTxtStyle: { 
    color: '#9dabac', 
    textAlign: "left",
    left: 4,
    fontSize: 20,
  },
  dropdown1DropdownStyle: { 
    backgroundColor: "#EFEFEF" 
  },
  dropdown1RowStyle: {
    backgroundColor: "#EFEFEF",
    borderBottomColor: "#C5C5C5",
  },
  dropdown1RowTxtStyle: { 
    color: "#444", 
    textAlign: "left" 
  },
  userIcon:{
    position: 'absolute',
    width: 37,
    height: 37,
    left: 40,
    top: 413,
  },
  passIcon: {
    position: 'absolute',
    width: 37,
    height: 37,
    left: 40,
    top: 477,
  },
  pass: {
    position: 'absolute',
    width: 268,
    height: 48,
    left: 86,
    top: 472,
    
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
  confpass:{
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
  confpassIcon: {
    position: 'absolute',
    width: 37,
    height: 37,
    left: 40,
    top: 541,
  },
  signup: {
    position: 'absolute',
    width: 194,
    height: 50.57,
    left: 115,
    top: 628,
    backgroundColor: '#22A7A7',
    borderRadius: 30,
  },
  signuptext: {
    position: 'absolute',
    width: 80,
    height: 45,
    left: 55,
    top: 15,
    
    // fontFamily: 'Baloo 2',
    // fontStyle: 'normal',
    // fontWeight: 400,
    // textAlign: 'center',

    fontSize: 22,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
    
  },
  account: {
    position: 'absolute',
    width: 430,
    height: 39,
    left: -225,
    top: 320,
    
    // fontFamily: 'Baloo 2',
    // fontStyle: 'normal',
    // fontWeight: 400,
    fontSize: 18,
    lineHeight: 28,
    // display: 'flex',
    // alignItems: 'center',
    textAlign: 'center',
    
    color: '#2E2E41',   
  },
  login: {
    // position: 'absolute',
    left: 100,
    top: 322,
    
    // fontFamily: 'Baloo 2',
    // fontStyle: 'normal',
    // fontWeight: 400,
    fontSize: 18,
    fontWeight: 'bold', 
    textDecorationLine: 'underline',
    
    color: '#0E7979',   
  },
});


