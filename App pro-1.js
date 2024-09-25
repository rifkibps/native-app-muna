/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';

const App = () => {
  return (
    <View >
      <Text
        style={{
          textAlign: 'center',
          marginTop: 20,
          fontSize: 20,
        }}>
        Title:
      </Text>
      <Text
        style={{
          textAlign: 'justify',
          fontSize: 16,
          fontWeight: '100',
          color: 'black',
          // marginBottom : 30,
          // marginTop: 20,
          marginVertical: 30, //Margin Vertical menggantikan Margin-Y pada bootstrap / Margin Top and Bottom
          // marginLeft: 20,
          // marginRight: 30,
          marginHorizontal: 20, //Margin Horizontal menggantikan Margin-X pada bootstrap
          // letterSpacing: 20, // Mengatur jarak antar huruf dalam satu kata
          lineHeight: 20,
          padding :20,
          margin: 20,
          paddingVertical: 100,
          paddingHorizontal: 200
        }}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </Text>
      <Text>Konsep dan Definisi</Text>

      <View
        style={{
          width:'auto',
          height:100,
          backgroundColor: 'blue',
          borderRadius:19,
          marginVertical:10,
          justifyContent:'center', //valuje: flex-end, flex-start, center
          alignItems:'center' //valuje: flex-end, flex-start, center, space-between
        }}>
        <Text 
          style={{
            color: 'white',
            marginHorizontal:20,
            marginVertical:5
          }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. 
        </Text>
      </View>

      <Text>
        Rincian Data
      </Text>
    </View>
  );
};

export default App;
