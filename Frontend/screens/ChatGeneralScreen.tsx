import React, { useState, useEffect } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import initialMessages from './messages';
import { renderInputToolbar, renderComposer, renderSend } from './InputToolbar';
import {
//   renderAvatar,
  renderBubble,
  renderSystemMessage,
  renderMessage,
  renderMessageText,
  renderCustomView,
} from './MessageContainer';

import { StyleSheet, Text } from 'react-native';
import { RootTabScreenProps } from '../types';
import BackButton from '../components/BackButton';
import { View } from '../components/Themed';

export default function ChatScreen({ navigation }: RootTabScreenProps<'ChatTab'>) {
    <BackButton goBack={() => navigation.navigate('Specialist') } />
    return(
        <View style={styles.container}>
            <Text>FlatList</Text>
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
});