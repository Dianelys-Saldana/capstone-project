import React from 'react';
import { Image, StyleSheet, TextInput, Button, Pressable} from 'react-native';

import { Text, View} from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function About({ navigation }: RootTabScreenProps<'ProfileTab'>) {
  return (
    <View style={styles.container}> 
        <Text style={styles.txt}>MediFast is a cross-platform mobile app that helps you find the nearest and best Medical Specialists and Wellness Providers. With MediFast you will be able to meet your service provider virtually or arrange an appointment that best fits you. Forget about long waiting times and unnecessary protocols!
        </Text>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: '#F5F3EF',
    padding: 25,
  },
  txt: {
    fontSize: 18,
  },
});