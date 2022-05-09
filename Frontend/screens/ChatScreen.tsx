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

import { RootTabScreenProps } from '../types';
import BackButton from '../components/BackButton';

export default function ChatScreen({ navigation }: RootTabScreenProps<'ChatTab'>) {
// {/* <BackButton goBack={() => navigation.navigate('Specialist') } /> */}

const [text, setText] = useState('');
const [messages, setMessages] = useState([]);
const onSend = (newMessages = []) => {
    setMessages((prevMessages) => GiftedChat.append(prevMessages, newMessages));
};

// useEffect(() => {
//   setMessages(initialMessages.reverse());
// }, []);

    return (
        <GiftedChat
            // keyboardShouldPersistTaps='never'
            messages={messages}
            text={text}
            onInputTextChanged={setText}
            onSend={onSend}
            user={{
                _id: 1,
                name: 'Aaron',
                avatar: 'https://placeimg.com/150/150/any',
            }}
            alignTop
            alwaysShowSend
            scrollToBottom
            // showUserAvatar
            renderAvatarOnTop
            renderUsernameOnMessage
            bottomOffset={26}
            onPressAvatar={console.log}
            renderInputToolbar={renderInputToolbar}
            renderComposer={renderComposer}
            renderSend={renderSend}
            // renderAvatar={renderAvatar}
            renderBubble={renderBubble}
            renderSystemMessage={renderSystemMessage}
            renderMessage={renderMessage}
            renderMessageText={renderMessageText}
            isCustomViewBottom
            messagesContainerStyle={{ backgroundColor: '#F5F3EF' }}
            //   renderActions={renderActions}
            //   renderMessageImage
            //   renderCustomView={renderCustomView}
            //   parsePatterns={(linkStyle) => [
            //     {
            //       pattern: /#(\w+)/,
            //       style: linkStyle,
            //       onPress: (tag) => console.log(`Pressed on hashtag: ${tag}`),
            //     },
            //   ]}
        />
  );
}
