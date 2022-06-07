import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';

const MessageInput = ( {submitMessage} ) => {
    const [message, setMessage] = useState('');

    const submitAndClear = () => {
        submitMessage(message)
        this.setMessage({
          mesㄴ: ''
        })
    }
    // const [msg, setMsg] = useState(data);
    // const _addMessage = () => {
    //     const ID = Date.now().toString();
    //     const newMessage = {
    //         [ID] : {id: ID, content: message, createdAt: ID, user:{id: u1, name: 'Vadim'}},
    //     };
    //     setMessage('');
    //     setMsg({...msg, ...newMessage});
    // }


    return (
        <View style={{
            flexDirection: 'row',
            padding: 10,
        }}>
            <View style={{
                backgroundColor: '#f2f2f2', 
                flex: 1,
                marginRight: 10,
                borderRadius: 25,
                borderWidth: 1,
                borderColor: '#dedede',
                justifyContent: 'center',
                flexDirection: 'row',
                padding: 5,
            }}>
                <TextInput style={{
                    flex: 1,
                    marginHorizontal: 5,
                }}
                value={message}
                onChangeText={setMessage}
                placeholder="메세지를 입력해주세요..." 
                />
            </View>
            <View style={{
                width: 40, 
                height: 40,
                backgroundColor: '#3777f0',
                borderRadius: 25,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Button style={{
                    color: 'white',
                    fontSize: 35,
                }} 
                title='▶︎'
                onPress={() => submitMessage(message)}/>
            </View>
        </View>
    )
}

export default MessageInput;