import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, Pressable } from 'react-native';
import { RootTabScreenProps } from '../types';
import { useNavigation } from '@react-navigation/native';
import BackButton from '../components/BackButton';

const data = [
  {
    id: '1',
    userName: 'Jenny Doe',
    userImg: require('../assets/images/name.png'),
    messageTime: '4 mins ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '2',
    userName: 'John Doe',
    userImg: require('../assets/images/name.png'),
    messageTime: '2 hours ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '3',
    userName: 'Ken William',
    userImg: require('../assets/images/name.png'),
    messageTime: '1 hours ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '4',
    userName: 'Selina Paul',
    userImg: require('../assets/images/name.png'),
    messageTime: '1 day ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '5',
    userName: 'Christy Alex',
    userImg: require('../assets/images/name.png'),
    messageTime: '2 days ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '6',
    userName: 'Jenny Doe',
    userImg: require('../assets/images/name.png'),
    messageTime: '4 mins ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '7',
    userName: 'John Doe',
    userImg: require('../assets/images/name.png'),
    messageTime: '2 hours ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
];

function Item({ id, name, img, time, msg } : { id: string, name: string, img: string, time: string, msg: string }) {
  const navigation = useNavigation()

  return (
    <View style={styles.item}>
    <Pressable style={styles.iconBox} onPress={() => navigation.navigate('Chat')}>
      {/* Change onPress */}

      <Image style={styles.icon} source={require('../assets/images/dr.png')}/>

      <Text style={styles.name}>{name}</Text>
      <Text style={styles.time}>{time}</Text>
      <Text style={styles.msg} numberOfLines={3}>{msg}</Text>
  </Pressable>
  </View>

  );
}  

export default function ChatGeneralScreen({ navigation }: RootTabScreenProps<'ChatTab'>) {
    return (
      <View>
        {/* <BackButton goBack={() => navigation.navigate('Dashboard')} /> */}
        {/* <Text style={styles.chats}>Messages</Text> */}

        <FlatList
            data={data}
            renderItem={({ item }) => (
              <Pressable>
                <Item
                id={item.id}
                name={item.userName}
                img={item.userImg}
                time={item.messageTime}
                msg={item.messageText}  
                />
              </Pressable>
            )}
            keyExtractor={item => item.id}
          />
      </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      // alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#F5F3EF',
    },
    chats: {
      // fontSize: 20,
      // fontWeight: 'bold',
      // fontFamily: 'Alata',
      // position: 'absolute',
      width: 374,
      height: 45,
      top: 50,
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
      height: 110,
      left: 27.5,
      top: 10,
    },
    name: {
      position: 'absolute',
      width: 180,
      height: 45,
      top: 5,
      left: 95,
      color: '#323337',
      fontSize: 19,
      fontWeight: 'bold',
    },
    time: {
      position: 'absolute',
      width: 200,
      height: 45,
      top: 6.5,
      left: 235,
      color: '#323337',
      fontSize: 16,
      overflow: 'hidden',
    },
    msg: {
      position: 'absolute',
      width: 215,
      height: 45,
      top: 35,
      left: 95,
      color: '#323337',
      fontSize: 16,
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
      width: 50,
      height: 50,
      top: 15,
      left: 15,
    },
});