import { StyleSheet, TextInput } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign up</Text>
      {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}
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
    top: 396,
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
});
