import React, {useState, Fragment, useCallback, useMemo} from 'react';
import {StyleSheet, View, Text, Pressable, ScrollView, TouchableOpacity, Button, } from 'react-native';
import {Calendar, CalendarProps} from 'react-native-calendars';
import { TimePicker } from './TimePickerScreen';
import { RootTabScreenProps } from '../types';
import BackButton from '../components/BackButton';
// import DatePicker from '@dietime/react-native-date-picker';
// import { Time } from 'react-native-gifted-chat';
// import DateTimePickerModal from "react-native-modal-datetime-picker";
// import DatePicker from 'react-native-modern-datepicker';
// import testIDs from '../testIDs';

const INITIAL_DATE = '2022-05-07';

export default function Booking({ navigation }: RootTabScreenProps<'DashboardTab'>) {

  const [selected, setSelected] = useState(INITIAL_DATE);
  const onDayPress: CalendarProps['onDayPress'] = useCallback(day => {
    setSelected(day.dateString);
  }, []);

  const marked = useMemo(() => {
    return {
      [selected]: {
        selected: true,
        disableTouchEvent: true,
        selectedColor: '#0074B7',
        selectedTextColor: 'white'
      }
    };
  }, [selected]);

  const renderCalendarWithMinAndMaxDates = () => {
    return (
      <Fragment>
        {/* <Text style={styles.text}>Calendar with min and max dates</Text> */}
        <Calendar
          style={styles.calendar}
          hideExtraDays
          // current={'2022-05-16'}
          current={INITIAL_DATE}
          minDate={'2022-05-10'}
          maxDate={'2022-05-20'}
          onDayPress={onDayPress}
          markedDates={marked}
        />
      </Fragment>
    );
  };

  const renderCalendar = () => {
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)

    return (
      <Fragment>
        {renderCalendarWithMinAndMaxDates()}
      </Fragment>
    );
  };

  const state = { date: new Date() }

  return (
    <View>
      {/* <BackButton goBack={() => navigation.navigate('Specialist') } /> */}

      <Text style={styles.day}>Select Day</Text>
      {renderCalendar()}

      <Text style={styles.time}>Select Time</Text>
      <TimePicker></TimePicker>

      <Pressable onPress={() => navigation.navigate('Success')} style={styles.btn}>
        <Text style={styles.btntext}>Confirm Appointment</Text>
      </Pressable>
      
    </View>
  );
};

const styles = StyleSheet.create({
  calendar: {
    marginBottom: 10,
    top: 80
  },
  day: {
    position: 'absolute',
    width: 180,
    height: 45,
    top: 30,
    left: 40,
    color: '#323337',
    fontSize: 25,
    fontWeight: 'bold',
  },
  time: {
    position: 'absolute',
    width: 180,
    height: 45,
    top: 420,
    left: 40,
    color: '#323337',
    fontSize: 25,
    fontWeight: 'bold',
  },
  switchContainer: {
    flexDirection: 'row',
    margin: 10,
    alignItems: 'center'
  },
  switchText: {
    margin: 10,
    fontSize: 16
  },
  text: {
    textAlign: 'center',
    padding: 10,
    backgroundColor: 'lightgrey',
    fontSize: 16
  },
  disabledText: {
    color: 'grey'
  },
  defaultText: {
    color: 'purple'
  },
  customCalendar: {
    height: 250,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey'
  },
  customDay: {
    textAlign: 'center'
  },
  customHeader: {
    backgroundColor: '#FCC',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: -4,
    padding: 8
  },
  customTitleContainer: {
    flexDirection: 'row', 
    alignItems: 'center', 
    padding: 10
  },
  customTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#00BBF2'
  },
  btn: {
    position: 'absolute',
    alignItems: 'center',
    // justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 33,
    elevation: 3,
    backgroundColor: '#0074B7',
    width: 245,
    top: 690,
    left: 85,
  },
  btntext: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});