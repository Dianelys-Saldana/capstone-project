/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { View, Text } from 'react-native';
import { Avatar, Bubble, SystemMessage, Message, MessageText } from 'react-native-gifted-chat';

export const renderAvatar = (props) => (
  <Avatar
    {...props}
    containerStyle={{ left: { borderWidth: 3, borderColor: 'red' }, right: {} }}
    imageStyle={{ left: { borderWidth: 3, borderColor: 'blue' }, right: {} }}
  />
);

export const renderBubble = (props) => (
  <Bubble
    {...props}
    wrapperStyle={{
      right: {
        backgroundColor: '#0074B7',
      },
    }}
    // renderTime={() => <Text>Time</Text>}
    // renderTicks={() => <Text>Ticks</Text>}
    // containerStyle={{
    //   left: { borderColor: 'red', borderWidth: 8 },
    //   right: {},
    // }}
    // wrapperStyle={{
    //   left: { borderColor: 'red', borderWidth: 4 },
    //   right: {},
    // }}
    // bottomContainerStyle={{
    //   left: { borderColor: 'red', borderWidth: 4 },
    //   right: {},
    // }}
    // tickStyle={{}}
    // usernameStyle={{ color: 'red', fontWeight: '100' }}
    // containerToNextStyle={{
    //   left: { borderColor: 'red', borderWidth: 4 },
    //   right: {},
    // }}
    // containerToPreviousStyle={{
    //   left: { borderColor: 'mediumorchid', borderWidth: 4 },
    //   right: {},
    // }}
  />
);

export const renderSystemMessage = (props) => (
  <SystemMessage
    {...props}
    // containerStyle={{ backgroundColor: 'red' }}
    // wrapperStyle={{ borderWidth: 10, borderColor: 'red' }}
    // textStyle={{ color: 'red', fontWeight: '900' }}
  />
);

export const renderMessage = (props) => (
  <Message
    {...props}
    // renderDay={() => <Text>Date</Text>}
    // containerStyle={{
    //   left: { backgroundColor: 'lime' },
    //   right: { backgroundColor: 'gold' },
    // }}
  />
);

export const renderMessageText = (props) => (
  <MessageText
    {...props}
    // containerStyle={{
    //   left: { backgroundColor: 'yellow' },
    //   right: { backgroundColor: 'purple' },
    // }}
    // textStyle={{
    //   left: { color: 'red' },
    //   right: { color: 'green' },
    // }}
    // linkStyle={{
    //   left: { color: 'orange' },
    //   right: { color: 'orange' },
    // }}
    customTextStyle={{ fontSize: 20, lineHeight: 24 }}
  />
);

export const renderCustomView = ({ user }) => (
  <View style={{ minHeight: 20, alignItems: 'center' }}>
    <Text>
      Current user:
      {user.name}
    </Text>
    <Text>From CustomView</Text>
  </View>
);