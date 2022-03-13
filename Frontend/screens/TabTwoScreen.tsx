import React from 'react';
import { Image, StyleSheet, TextInput, Button, Pressable} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

import SelectDropdown from 'react-native-select-dropdown'

const users = ["Patient", "Service Provider"]

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}
      <Text style={styles.title}>Create Account</Text>
      
      <Image style={styles.avatar} source={require('../assets/images/email.png')}/>
      <TextInput style={styles.name} placeholder={'Name'}></TextInput>

      <Image style={styles.phoneIcon} source={require('../assets/images/email.png')}/>
      <TextInput style={styles.phone} placeholder={'Phone'}></TextInput>

      <Image style={styles.emailIcon} source={require('../assets/images/email.png')}/>
      <TextInput style={styles.email} placeholder={'Email'}></TextInput>
      
      <SelectDropdown
        data={users}
        // defaultValueByIndex={1}
        // defaultValue={'Patient'}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index);
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
      <TextInput style={styles.pass} placeholder={'Password'}></TextInput>
      
      <Image style={styles.confpassIcon} source={require('../assets/images/pass.png')}/>
      <TextInput style={styles.confpass} placeholder={'Confirm Password'}></TextInput>
      
      <Pressable style={styles.signup} onPress={() => {alert('Welcome!');}}>
        <Text style={styles.text}>Sign up</Text>
      </Pressable>

      <Text style={styles.account}>Already have an account? Login</Text>
      
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
  title: {
    // fontSize: 20,
    // fontWeight: 'bold',

    position: 'absolute',
    width: 374,
    height: 91,
    left: -31,
    top: 96,
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
  emailIcon: {
    position: 'absolute',
    width: 37,
    height: 37,
    left: 40,
    top: 324,
  },
  email: {
    position: 'absolute',
    width: 268,
    height: 48,
    left: 86,
    top: 319,
    
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
    top: 455,
  },
  pass: {
    position: 'absolute',
    width: 268,
    height: 48,
    left: 86,
    top: 443,
    
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
  signup: {
    position: 'absolute',
    width: 194,
    height: 50.57,
    left: 115,
    top: 621,
    backgroundColor: '#22A7A7',
    borderRadius: 30,
  },
  text: {
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
    left: -1,
    top: 700,
    
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
  name:{
    position: 'absolute',
    width: 268,
    height: 48,
    left: 86,
    top: 191,
    
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
    top: 196,
  },
  phone:{
    position: 'absolute',
    width: 268,
    height: 48,
    left: 86,
    top: 255,
    
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
    width: 37,
    height: 37,
    left: 40,
    top: 260,
  },
  confpass:{
    position: 'absolute',
    width: 268,
    height: 48,
    left: 86,
    top: 507,
    
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
    top: 512,
  },
  dropdown1BtnStyle: {
    position: 'absolute',
    width: 268,
    height: 48,
    left: 86,
    top: 381,

    backgroundColor: '#C0DEDD',
    borderRadius: 8,
    borderWidth: 2.5,
    borderColor: '#0E7979',
  },
  dropdown1BtnTxtStyle: { 
    color: 'grey', 
    textAlign: "left", 
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
});
