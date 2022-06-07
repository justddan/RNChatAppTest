import React from 'react';
import {View, Text} from 'react-native';

const blue = '#3777f0';
const grey = 'lightgrey'

const myID = 'u1';

const Message = ({ message }) => {

    const isMe = message.userID === myID;

    return(
        <View style={{
            backgroundColor: isMe ? grey : blue,
            marginLeft: isMe ? 'auto' : 10,
            marginRight: isMe ? 10 : 'auto',
            padding: 10,
            marginVertical: 5,
            marginHorizontal: 10,
            borderRadius: 10,
            maxWidth: '75%',
        }}>
            <Text style={{
                color: isMe ? 'black' :'white'
            }}>{message.content}</Text>
        </View>
    )
}

export default Message;
