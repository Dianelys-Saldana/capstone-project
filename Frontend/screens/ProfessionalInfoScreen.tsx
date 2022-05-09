import React from 'react';
import { Image, StyleSheet, TextInput, Button, Pressable} from 'react-native';

import { Text, View} from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function ProfessionalInfo({ navigation }: RootTabScreenProps<'DashboardTab'>) {
  return (
    <View style={styles.container}> 
        <Text>Professional's Info</Text>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F3EF',
  },
})