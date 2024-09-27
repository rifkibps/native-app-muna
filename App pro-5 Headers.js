/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  FlatList,
  StatusBar,
  ToastAndroid,
  ActivityIndicator,
  RefreshControl,
  ImageBackground,
  Linking,
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
  function pushNotif() {
    return Alert.alert('Nama Kab/Kot:', 'Nama Kecamatan', [
      {
        text: 'Batal',
        onPress: () => console.log('Cancelled'),
      },
      {
        text: 'Ya',
        onPress: () => console.log('Data loaded'),
      },
      {
        text: 'Tidak',
        onPress: () => console.log('Request Cancelled'),
      },
    ]);
  }

  function triggerToast(kec) {
    ToastAndroid.show('Kecamatan: ' + kec, ToastAndroid.SHORT);
  }

  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  return (
    <View style={{flex: 1, backgroundColor: '#fafafa'}}>
      <ImageBackground
        source={require('./src/images/footage1.jpg')}
        style={{
          marginHorizontal:20,
          marginTop: 10,
          padding: 20,
        }}
        imageStyle={{
          borderRadius: 10
        }}
      >

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

      <View>
        <ActivityIndicator animating={loading} size="large" color="#282c34" />
        <TouchableOpacity
          style={{
            marginHorizontal: 20,
            backgroundColor: '#3498db',
            paddingVertical: 20,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 20,
            elevation: 3,
          }}
          onPress={() => setLoading(!loading)}>
          <Text
            style={{
              color: '#fafafa',
            }}>
            Toggle
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={admObj}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => console.log('refresh')}
          />
        }
        renderItem={({item, index}) => (
          <TouchableOpacity
            style={{
              backgroundColor: '#3498db',
              marginHorizontal: 20,
              marginVertical: 5,
              borderRadius: 10,
              elevation: 3,
              padding: 20,
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
            }}
            onPress={() => triggerToast(item.kec)}
            >
            <Text
              style={{
                color: '#fafafa',
                fontSize: 15,
                marginHorizontal: 10,
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
          </TouchableOpacity>
        )}
      />

      <View>
        <TouchableOpacity style={{
          marginHorizontal: 20,
          backgroundColor : '#3498db',
          padding: 20,
          borderRadius: 10,
          alignItems : 'center'
        }}
        onPress={() => Linking.openURL('https://wa.me/6285720813630')}
        >
          <Text style={{
            color : '#fafafa',
            fontWeight: 'bold'
          }}>Open WA</Text>
        </TouchableOpacity>
      </View>
      
      </ImageBackground>
    </View>
  );
};

export default App;
