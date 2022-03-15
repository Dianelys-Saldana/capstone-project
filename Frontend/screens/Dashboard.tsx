import React from 'react';
import { Image, StyleSheet, TextInput, Button, Pressable} from 'react-native';

import { Text, View} from '../components/Themed';
import { RootTabScreenProps } from '../types';


export default function TabOneScreen({ navigation }: RootTabScreenProps<'SignIn'>) {
  return (
    <View style={styles.container}> 
        <View style={[styles.box,{position: 'absolute'}]}> 
            <Text style={styles.medicalSpec}>Medical Specialties</Text>
            <Text style={styles.see}>See all</Text>

            <View style={[styles.specBox,{position: 'absolute'}]}>
                <Text style={styles.cardio}>Cardiology</Text>
                <Image style={styles.cardioIcon} source={require('../assets/images/cardio.png')}/>
            </View>

            <View style={[styles.specBox2,{position: 'absolute'}]}>
                <Text style={styles.derma}>Dermatology</Text>
                <Image style={styles.dermaIcon} source={require('../assets/images/derma.png')}/>
            </View>

            <View style={[styles.specBox3,{position: 'absolute'}]}>
                <Text style={styles.gyn}>Gynecology</Text>
                <Image style={styles.gynIcon} source={require('../assets/images/gyn.png')}/>
            </View>

            <View style={[styles.specBox4,{position: 'absolute'}]}>
                <Text style={styles.neuro}>Neurology</Text>
                <Image style={styles.neuroIcon} source={require('../assets/images/neuro.png')}/>
            </View>

            <View style={[styles.specBox5,{position: 'absolute'}]}>
                <Text style={styles.ofta}>Ophthalmology</Text>
                <Image style={styles.oftaIcon} source={require('../assets/images/ofta.png')}/>
            </View>

            <View style={[styles.specBox6,{position: 'absolute'}]}>
                <Text style={styles.pedi}>Pediatrics</Text>
                <Image style={styles.pediIcon} source={require('../assets/images/pedi.png')}/>
            </View>

            <View style={[styles.specBox7,{position: 'absolute'}]}>
                <Text style={styles.psi}>Psychology</Text>
                <Image style={styles.psiIcon} source={require('../assets/images/psi.png')}/>
            </View>

            <View style={[styles.specBox8,{position: 'absolute'}]}>
                <Text style={styles.psy}>Psychiatry</Text>
                <Image style={styles.psyIcon} source={require('../assets/images/psy.png')}/>
            </View>

            <View style={[styles.specBox9,{position: 'absolute'}]}>
                <Text style={styles.uro}>Urology</Text>
                <Image style={styles.uroIcon} source={require('../assets/images/uro.png')}/>
            </View>

        </View>

        <View style={[styles.box2,{position: 'absolute'}]}> 
            <Text style={styles.wellSpec}>Wellness and Other Services</Text>
            <Text style={styles.see2}>See all</Text>

            <View style={[styles.wellBox,{position: 'absolute'}]}></View>
            <View style={[styles.wellBox2,{position: 'absolute'}]}></View>
            <View style={[styles.wellBox3,{position: 'absolute'}]}></View>
            <View style={[styles.wellBox4,{position: 'absolute'}]}></View>
            <View style={[styles.wellBox5,{position: 'absolute'}]}></View>
            <View style={[styles.wellBox6,{position: 'absolute'}]}></View>

        </View>
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
  box: {
    height: 366,
    width: 357,
    flexDirection: "row",
    padding: 20,
    top: 130,
    backgroundColor: '#DDE3E9',
    borderRadius: 33,
  },
  medicalSpec: {
    position: 'absolute',
    height: 36,
    top: 20,
    left: 30,

    // fontFamily: 'Alata',
    // fontStyle: 'normal',
    // fontWeight: 400,
    fontSize: 18,
    // lineHeight: 25,

    color: '#323337',
  },
  see: {
    position: 'absolute',
    height: 36,
    top: 25,
    left: 290,

    // fontFamily: 'Alata',
    fontSize: 12,

    color: '#323337',
  },
  specBox: {
    height: 90,
    width: 90,
    flexDirection: "row",
    padding: 20,
    top: 55,
    left: 24,
    backgroundColor: '#2F3676',
    borderRadius: 33,
  },
  specBox2: {
    height: 90,
    width: 90,
    flexDirection: "row",
    padding: 20,
    top: 55,
    left: 134,
    backgroundColor: '#2F3676',
    borderRadius: 33,
  },
  specBox3: {
    height: 90,
    width: 90,
    flexDirection: "row",
    padding: 20,
    top: 55,
    left: 244,
    backgroundColor: '#2F3676',
    borderRadius: 33,
  },
  specBox4: {
    height: 90,
    width: 90,
    flexDirection: "row",
    padding: 20,
    top: 155,
    left: 24,
    backgroundColor: '#2F3676',
    borderRadius: 33,
  },
  specBox5: {
    height: 90,
    width: 90,
    flexDirection: "row",
    padding: 20,
    top: 155,
    left: 134,
    backgroundColor: '#2F3676',
    borderRadius: 33,
  },
  specBox6: {
    height: 90,
    width: 90,
    flexDirection: "row",
    padding: 20,
    top: 155,
    left: 244,
    backgroundColor: '#2F3676',
    borderRadius: 33,
  },
  specBox7: {
    height: 90,
    width: 90,
    flexDirection: "row",
    padding: 20,
    top: 255,
    left: 24,
    backgroundColor: '#2F3676',
    borderRadius: 33,
  },
  specBox8: {
    height: 90,
    width: 90,
    flexDirection: "row",
    padding: 20,
    top: 255,
    left: 134,
    backgroundColor: '#2F3676',
    borderRadius: 33,
  },
  specBox9: {
    height: 90,
    width: 90,
    flexDirection: "row",
    padding: 20,
    top: 255,
    left: 244,
    backgroundColor: '#2F3676',
    borderRadius: 33,
  },
  box2: {
    height: 266,
    width: 357,
    flexDirection: "row",
    padding: 20,
    top: 520,
    backgroundColor: '#C0DEDD',
    borderRadius: 33,
  },
  wellSpec: {
    position: 'absolute',
    height: 36,
    top: 20,
    left: 30,

    // fontFamily: 'Alata',
    // fontStyle: 'normal',
    // fontWeight: 400,
    fontSize: 18,
    // lineHeight: 25,

    color: '#323337',
  },
  see2: {
    position: 'absolute',
    height: 36,
    top: 25,
    left: 290,

    // fontFamily: 'Alata',
    fontSize: 12,

    color: '#323337',
  },
  wellBox: {
    height: 90,
    width: 90,
    flexDirection: "row",
    padding: 20,
    top: 55,
    left: 24,
    backgroundColor: '#22A7A7',
    borderRadius: 33,
  },
  wellBox2: {
    height: 90,
    width: 90,
    flexDirection: "row",
    padding: 20,
    top: 55,
    left: 134,
    backgroundColor: '#22A7A7',
    borderRadius: 33,
  },
  wellBox3: {
    height: 90,
    width: 90,
    flexDirection: "row",
    padding: 20,
    top: 55,
    left: 244,
    backgroundColor: '#22A7A7',
    borderRadius: 33,
  },
  wellBox4: {
    height: 90,
    width: 90,
    flexDirection: "row",
    padding: 20,
    top: 155,
    left: 24,
    backgroundColor: '#22A7A7',
    borderRadius: 33,
  },
  wellBox5: {
    height: 90,
    width: 90,
    flexDirection: "row",
    padding: 20,
    top: 155,
    left: 134,
    backgroundColor: '#22A7A7',
    borderRadius: 33,
  },
  wellBox6: {
    height: 90,
    width: 90,
    flexDirection: "row",
    padding: 20,
    top: 155,
    left: 244,
    backgroundColor: '#22A7A7',
    borderRadius: 33,
  },
  cardio: {
    position: 'absolute',
    width: 80,
    height: 45,
    top: 65,
    left: 5,
    textAlign: 'center',
    color: 'white',
    fontSize: 10,
  },
  cardioIcon: {
    position: 'absolute',
    width: 45,
    height: 45,
    top: 18,
    left: 23,
  },
  derma: {
    position: 'absolute',
    width: 80,
    height: 45,
    top: 65,
    left: 5,
    textAlign: 'center',
    color: 'white',
    fontSize: 10,
  },
  dermaIcon: {
    position: 'absolute',
    width: 45,
    height: 45,
    top: 10,
    left: 23,
  },
  gyn: {
    position: 'absolute',
    width: 80,
    height: 45,
    top: 65,
    left: 5,
    textAlign: 'center',
    color: 'white',
    fontSize: 10,
  },
  gynIcon: {
    position: 'absolute',
    width: 45,
    height: 45,
    top: 18,
    left: 23,
  },
  neuro: {
    position: 'absolute',
    width: 80,
    height: 45,
    top: 65,
    left: 5,
    textAlign: 'center',
    color: 'white',
    fontSize: 10,
  }, 
  neuroIcon: {
    position: 'absolute',
    width: 45,
    height: 45,
    top: 18,
    left: 23,
  }, 
  ofta: {
    position: 'absolute',
    width: 80,
    height: 45,
    top: 65,
    left: 5,
    textAlign: 'center',
    color: 'white',
    fontSize: 10,
  },
  oftaIcon: {
    position: 'absolute',
    width: 57,
    height: 27,
    top: 30,
    left: 18,
  },
  pedi: {
    position: 'absolute',
    width: 80,
    height: 45,
    top: 65,
    left: 5,
    textAlign: 'center',
    color: 'white',
    fontSize: 10,
  },
  pediIcon: {
    position: 'absolute',
    width: 45,
    height: 45,
    top: 18,
    left: 23,
  },
  psi: {
    position: 'absolute',
    width: 80,
    height: 45,
    top: 65,
    left: 5,
    textAlign: 'center',
    color: 'white',
    fontSize: 10,
  },
  psiIcon: {
    position: 'absolute',
    width: 45,
    height: 45,
    top: 18,
    left: 23,
  },
  psy: {
    position: 'absolute',
    width: 80,
    height: 45,
    top: 65,
    left: 5,
    textAlign: 'center',
    color: 'white',
    fontSize: 10,
  },
  psyIcon: {
    position: 'absolute',
    width: 45,
    height: 45,
    top: 18,
    left: 23,
  },
  uro: {
    position: 'absolute',
    width: 80,
    height: 45,
    top: 65,
    left: 5,
    textAlign: 'center',
    color: 'white',
    fontSize: 10,
  }, 
  uroIcon: {
    position: 'absolute',
    width: 40,
    height: 40,
    top: 18,
    left: 23,
  }
});
