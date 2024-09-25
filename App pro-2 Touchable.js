/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StatusBar,
  Alert,
  TouchableOpacity,
  Image,
} from 'react-native';

const App = () => {
  function pushNotif() {
    Alert.alert('Hello World');
  }

  return (
    <View style={{backgroundColor: 'white', height: 1000}}>
      <StatusBar barStyle={'light-content'} backgroundColor={'#2e4053'} />
      <View
        style={{
          backgroundColor: '#2e4053',
          padding: 20,
          elevation: 5, // Memberiukan shadoow
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 20,
            fontWeight: 'bold',
          }}>
          BPS Kabupaten Muna
        </Text>
      </View>

      <TouchableOpacity
        onPress={() => pushNotif()} // Pas diteken langsung throw alert
        // onPressIn={() => pushNotif()} // Pas diteken pertama lama langsung throw alert
        // onPressOut={() => pushNotif()} // Pas diteken lama dan dilepas baru keluar alert
        // onPressOut={() => pushNotif()} // Pas diteken lama dan dilepas baru keluar alert
        // onLongPress={() => pushNotif()} // Pas diteken lama
        style={{
          textAlign: 'center',
          backgroundColor: '#2e86c1',
          alignContent: 'center',
          marginVertical: 100,
          borderRadius: 20,
          marginHorizontal: 20,
          elevation: 3,
        }}>
        <View>
          <Text
            style={{
              fontSize: 22,
              marginVertical: 24,
              textAlign: 'center',
            }}>
            Show Alert
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => pushNotif()}>
        <View
          style={{
            justifyContent: 'center',
            alignItems : 'center',
            marginBottom: 50,
          }}
        >
          <Image
            source={require('./src/images/footage1.jpg')}
            style={{
              width: 250,
              height: 250,
              borderRadius:10,
            }}
          />
        </View>
      </TouchableOpacity>

      <View
      style={{
        justifyContent: 'center',
        alignItems : 'center',
      }}
      >
      <Image
          source={{
            uri : 'https://images.unsplash.com/photo-1720048171527-208cb3e93192?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          }}
          style={{
            width: 250,
            height: 250,
            borderRadius:10, // borderTopLeftRadius, borderBottomLeftRadius. dll
            borderWidth:2,
            borderColor:'#fa8072',
          }}
        />
      </View>
    </View>
  );
};

export default App;
