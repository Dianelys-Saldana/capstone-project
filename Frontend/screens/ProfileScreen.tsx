import React from 'react';
import { Image, StyleSheet, TextInput, Button, Pressable} from 'react-native';

import { Text, View} from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function Profile({ navigation }: RootTabScreenProps<'ProfileTab'>) {
  return (
    <View style={styles.container}> 
        <View style={styles.item}>
          <Pressable onPress={() => navigation.navigate('Patient')}>
            {/* Change onPress */}
            <Image style={styles.icon} source={require('../assets/images/name.png')}/>
            <Text style={styles.txt}>My Profile</Text>
          </Pressable>
        </View>

        <View style={styles.item}>
          <Pressable onPress={() => navigation.navigate('About')}>
            {/* Change onPress */}
            <Image style={styles.icon} source={require('../assets/images/about.png')}/>
            <Text style={styles.txt}>About MediFast</Text>
          </Pressable>
        </View>

        <View style={styles.item}>
          <Pressable onPress={() => navigation.navigate('PrivacyPolicy')}>
            {/* Change onPress */}
            <Image style={styles.icon} source={require('../assets/images/pp.png')}/>
            <Text style={styles.txt}>Privacy Policy</Text>
          </Pressable>
        </View>

        <View style={styles.item}>
          <Pressable onPress={() => navigation.navigate('SignIn')}>
            <Image style={styles.icon} source={require('../assets/images/logout.png')}/>
            <Text style={styles.txt}>Logout</Text>
          </Pressable>
        </View>

    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    backgroundColor: '#F5F3EF',
  },
  user: {
    // fontSize: 20,
    // fontWeight: 'bold',
    // fontFamily: 'Alata',
    // position: 'absolute',
    width: 374,
    height: 45,
    top: -120,
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 25,
    left: 40,
    color: '#323337',
  },
  item: {
    padding: 20,
    marginVertical: 8,
    flexDirection: "row",
    
    backgroundColor: '#BFD7ED',
    borderRadius: 40,
    width: 357,
    height: 90,
    left: 27.5,
    top: 20,
  },
  txt: {
    position: 'absolute',
    width: 215,
    height: 45,
    top: 15,
    left: 65,
    color: '#323337',
    fontSize: 20,
  },
  iconBox: {
    height: 80,
    width: 80,
    top: 15,
    left: 20,
    padding: 20,
    borderRadius: 40,
    flexDirection: "row",
    position: 'absolute',
    backgroundColor: '#0074B7',
  },
  icon: {
    position: 'absolute',
    width: 30,
    height: 30,
    top: 10,
    left: 15,
  },
});