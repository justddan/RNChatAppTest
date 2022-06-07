// import React from 'react';
// import {View, Text, TextInput, SafeAreaView} from 'react-native';


// const App = () => {
//     return (
//         <SafeAreaView style={{paddingVertical:10, paddingHorizontal: 4, position: 'relative', height: '100%'}}>
//             <View style={{marginLeft: 8, flexDirection: 'row', marginBottom: 16}}>
//                 <View style={{width: 20, height: 20, borderRadius: 9999, backgroundColor: 'rgb(148,163,184)'}}/>
//                 <View style={{width: '50%', fontSize: 14, lineHeight: 20 ,color: 'rgb(55,65,81)', padding: 2, borderWidth: 1, borderRadius: 6}}>
//                     <Text>Hi how much are you selling them for?</Text>
//                 </View>
//             </View>
//             <View style={{marginRight: 8, flexDirection:'row-reverse', marginBottom: 16}}>
//                 <View style={{width: 20, height: 20, borderRadius: 9999, backgroundColor: 'rgb(148,163,184)'}}/>
//                 <View style={{width: '50%', fontSize: 14, lineHeight: 20 ,color: 'rgb(55,65,81)', padding: 2, borderWidth: 1, borderRadius: 6}}>
//                     <Text>I want 20,000</Text>
//                 </View>
//             </View>
//             <View style={{marginLeft: 8, flexDirection: 'row', marginBottom: 16}}>
//                 <View style={{width: 20, height: 20, borderRadius: 9999, backgroundColor: 'rgb(148,163,184)'}}/>
//                 <View style={{width: '50%', fontSize: 14, lineHeight: 20 ,color: 'rgb(55,65,81)', padding: 2, borderWidth: 1, borderRadius: 6}}>
//                     <Text>미쳤어</Text>
//                 </View>
//             </View>
//             <View style={{position:'absolute',  width:'100%',marginHorizontal: 'auto', bottom: 0, left: 0, right: 0}}>
//                 <View style={{alignItems : 'center', flexDirection: 'row', borderWidth: 1, borderRadius: 30}}>
//                     <TextInput textContentType='text' style={{width:'100%', marginBottom: 100}}/>
//                     <View style={{position: 'absolute', right: 0}}>
//                         <Text>
//                             &rarr;
//                         </Text>
//                     </View>
//                 </View>
//             </View>
//         </SafeAreaView>
//     );
// }

// export default App;

import React, {useState} from 'react';
import {View, Text, FlatList, SafeAreaView} from 'react-native';

import Message from './message/Message';
import styled from 'styled-components/native';
import DummyData from './message/DummyData';
import MessageInput from './message/MessageInput';




export default function App() {
    const [msg, setMsg] = useState(DummyData);
    
    const submitMessage = (text) => {
        setMsg((prevMsg) => {
            return [
                {id: Math.random().toString(),
                content: text,
                createdAt: Date.now().toString(),
                userID: 'u1',
                userName: 'Vadim',},
                ...prevMsg
            ]
        })
    }
    return(
        <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
            <FlatList
                data={msg}
                renderItem={({item}) => <Message message={item} />}
                inverted
            />
            <MessageInput submitMessage={submitMessage}/>
        </SafeAreaView>
    )

}

