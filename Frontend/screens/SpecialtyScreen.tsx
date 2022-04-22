import React, { useState } from 'react';
import { StyleSheet, Image, TextInput, Pressable, Button} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View} from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function Specialty({ navigation }: RootTabScreenProps<'SignIn'>) {
  
  return (
    <View style={styles.container}>
      <Text style={styles.specialty}>Specialty Screen</Text>

      <EditScreenInfo path="/screens/Specialty.tsx" />
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
  specialty: {
    // fontSize: 20,
    // fontWeight: 'bold',

    position: 'absolute',
    width: 374,
    height: 91,
    left: -30,
    top: 81,
    // fontFamily: 'Alata',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 30,
    lineHeight: 50,
    textAlign: 'center',
    color: '#0E7979',
  },
});
