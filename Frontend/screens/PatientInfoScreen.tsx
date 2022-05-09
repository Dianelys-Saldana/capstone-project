import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, TextInput, Button, Pressable} from 'react-native';
import { Text, View} from '../components/Themed';
import { RootTabScreenProps } from '../types';
import SelectDropdown from 'react-native-select-dropdown';
import DatePicker from "@dietime/react-native-date-picker";

export default function Patient({ navigation }: RootTabScreenProps<'DashboardTab'>) {
    const genderList = ["Female", "Male", "Transgender", "Non-binary/non-conforming", "Prefer not to respond"]; 
    const [gender, setGender] = useState('');
    const [date, setDate] = useState<Date | null>();

    return (
    <View style={styles.container}> 
        {/* <Text>Patient's Info</Text> */}

        {/* <Image style={styles.userIcon} source={require('../assets/images/gender-fluid.png')}/> */}
        <SelectDropdown
          data={genderList}
          // defaultValueByIndex={0}
          // defaultValue={'Prefer not to respond'}

          onSelect={(selectedItem, index) => {
            // console.log(selectedItem, index);
            setGender(selectedItem)
          }}
          defaultButtonText={"Gender"}
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

        <View style={styles.date}>
          {
            [
                {value: date ? date.getDate() : "DD"},
                {value: date ? date.getMonth() + 1 : "MM"},
                {value: date ? date.getFullYear() : "YYYY"},
            ]
            .map((el, index) => {
                return (
                    <View style={styles.datePart} key={index}>
                        {/* <Text style={styles.title}>{el.title}</Text> */}
                        <Text style={styles.digit}>{el.value}</Text>
                    </View>
                )
            })
          }
        </View>
        <DatePicker
          value={date}
          width={"80%"}
          fontSize={19}
          height={170}
          onChange={(value: Date) => setDate(value)}
          format={"dd-mm-yyyy"}
        />
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    // backgroundColor: '#F5F3EF',
    // justifyContent: 'space-around',
  },
  userIcon:{
    position: 'absolute',
    width: 37,
    height: 37,
    left: 40,
    top: 205,
  },
  dropdown1BtnStyle: {
    position: 'absolute',
    width: 268,
    height: 48,
    left: 86,
    top: 200,

    backgroundColor: '#fff',
    borderRadius: 23,
    borderWidth: 2.5,
    borderColor: '#2E2E41',
  },
  dropdown1BtnTxtStyle: { 
    // color: '#9dabac', 
    color: '#2E2E41',
    textAlign: "left",
    left: 4,
    fontSize: 20,
  },
  dropdown1DropdownStyle: { 
    backgroundColor: "#EFEFEF",
  },
  dropdown1RowStyle: {
    backgroundColor: "#EFEFEF",
    borderBottomColor: "#C5C5C5"
  },
  dropdown1RowTxtStyle: { 
    // color: "#444", 
    color: '#2E2E41',
    textAlign: "left", 
  },
  date: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "60%",
  },
  datePart: {
    width: 100,
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "200",
    marginBottom: 5,
  },
  digit: {
    fontSize: 20,
  },
})