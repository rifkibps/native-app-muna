import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  FlatList,
  StatusBar,
} from 'react-native';

const adm = [
  'Katobu',
  'Batalaiworu',
  'Lasalepa',
  'Napabalano',
  'Duruka',
  'Lohia',
  'Kabangka',
  'Kontunaga',
  'Watopute',
];

const admObj = [
  {
    kec: 'Katobu',
    kab: 'Muna',
  },
  {
    kec: 'Batalaiworu',
    kab: 'Muna',
  },
  {
    kec: 'Lasalepa',
    kab: 'Muna',
  },
  {
    kec: 'Napabalano',
    kab: 'Muna',
  },
  {
    kec: 'Duruka',
    kab: 'Muna',
  },
  {
    kec: 'Lohia',
    kab: 'Muna',
  },
  {
    kec: 'Kabangka',
    kab: 'Muna',
  },
];

const App = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#fafafa'}}>
      <StatusBar backgroundColor={'#21252b'} barStyle={'light-content'} />
      <View
        style={{
          marginHorizontal: 20,
          marginVertical: 20,
        }}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
          }}>
          Daftar Kecamatan Kabupaten Muna:
        </Text>
      </View>
      <FlatList
        data={admObj}
        renderItem={({item, index}) => (
          <View
            style={{
              backgroundColor: '#3498db',
              marginHorizontal: 20,
              marginVertical: 5,
              borderRadius: 10,
              elevation: 3,
              padding: 20,
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row'
            }}>
            <Text
              style={{
                color: '#fafafa',
                fontSize: 15,
                marginHorizontal :10
              }}>
              Kecamatan: {item.kec}
            </Text>
            <Text
              style={{
                color: '#fafafa',
                fontSize: 15,
              }}>
              Kabupaten/Kota: {item.kab}
            </Text>
          </View>
        )}
      />
      {/* <FlatList
        data={adm}
        renderItem={({item, index}) => (
          <View
            style={{
              marginHorizontal: 20,
              marginVertical:5,
              paddingVertical:10,
              justifyContent:'center',
              alignItems: 'center',
              backgroundColor: '#3498db',
              elevation : 3,
              borderRadius:10,
            }}>
            <Text style={{color : '#fafafa'}}>{item}</Text>
          </View>
        )}
      /> */}
    </View>
  );
};

export default App;
