/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Alert, Switch} from 'react-native';

const App = () => {

  const [saldo, setSaldo] = useState(100000);
  const [lamp, setState] = useState(false);

  function countDiscount() {
    let discounting;
    discounting = saldo - (10 / 100) * saldo;
    setSaldo(discounting);
    return Alert.alert('Saldo setelah diskon: Rp' + saldo);
  }

  return (
    <View
      style={{
        backgroundColor: 'white',
        height: 1000,
        paddingVertical: 50,
        paddingHorizontal: 20,
      }}>
      <Text style={{color: 'black'}}>Saldo Sebelum Diskon: {saldo}</Text>
      <Text style={{color: 'black'}}>State: {saldo}</Text>
      <TouchableOpacity
        style={{width: 100, marginTop: 5}}
        onPress={() => countDiscount()}>
        <Text
          style={{
            color: 'black',
            backgroundColor: 'red',
            borderRadius: 10,
            paddingHorizontal: 10,
          }}>
          Hitung Diskon
        </Text>
      </TouchableOpacity>
      <Switch style={{color: 'red',  marginTop:100}} value={lamp} onValueChange={() => setState(!lamp)} />
    </View>
  );
};

export default App;
