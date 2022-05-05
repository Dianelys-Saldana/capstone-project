import React, { Component, useState } from 'react';
import { Image, StyleSheet, ScrollView, TextInput, Button, Pressable} from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View} from '../components/Themed';
import { RootTabScreenProps } from '../types';
import BackButton from '../components/BackButton';
import { AppointmentPicker } from "react-appointment-picker";
import DatePickerComponent from '@syncfusion/ej2-react-calendars'
import { DayPicker } from 'react-day-picker';
import { Calendar, CalendarList } from 'react-native-calendars';
import dateFns from 'date-fns';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

export default function CalendarScreen({ navigation }: RootTabScreenProps<'CalendarTab'>) {
  
  return (
    // <ScrollView showsVerticalScrollIndicator={false}> 
    <View style={styles.container}>
    {/* <BackButton goBack={() => navigation.navigate('Specialist') } /> */}
    {/* TODO: Cambiar ruta a Specialty */}
        

        <Calendar style={styles.calendar}></Calendar>
      
        {/* <Pressable onPress={() => navigation.navigate('Success')} style={styles.btn}> */}
            {/* TODO: Cambiar a Confirm */}
            {/* <Text style={styles.btntext}>Confirm Appointment</Text> */}
        {/* </Pressable> */}

    </View>
    // </ScrollView>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: '#F5F3EF',
  },
  item: {
    padding: 20,
    marginVertical: 8,
    flexDirection: "row",
    
    backgroundColor: '#C0DEDD',
    position: 'absolute',
    borderRadius: 40,
    width: 357,
    height: 136,
    left: 27.5,
    top: 100,
  },
  iconBox: {
    height: 100,
    width: 100,
    top: 20,
    left: 20,
    padding: 20,
    borderRadius: 40,
    flexDirection: "row",
    position: 'absolute',
    backgroundColor: '#22A7A7',
  },
  icon: {
    position: 'absolute',
    width: 50,
    height: 50,
    top: 23,
    left: 25,
  },
  btn: {
    position: 'absolute',
    alignItems: 'center',
    // justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 33,
    elevation: 3,
    backgroundColor: '#22A7A7',
    width: 245,
    top: 740,
    left: 85,
  },
  btntext: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  calendar: {
    // position: 'absolute',
    // flex: 1,
    top: 100,
    width: 350,
  },
});
