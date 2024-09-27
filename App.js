/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  FlatList,
  Touchable,
  TouchableOpacity,
  ToastAndroid
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';
import Clipboard from '@react-native-clipboard/clipboard';


const App = () => {

  const copyKecamatan = (item) => {
    Clipboard.setString('Kecamatan ' + item)
    ToastAndroid.show('Kecamatan ' +item+' erhasil di salin!', ToastAndroid.SHORT)
  }

  const [dataAdm, setDataAdm] = useState([
    'Katobu',
    'Batalaiworu',
    'Lasalepa',
    'Napabalano',
    'Towea',
    'Kabangka',
  ]);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fafafa',
      }}>
      <StatusBar barStyle="light-content" backgroundColor="#282c34" />

      {/* Header */}
      <View
        style={{
          backgroundColor: '#282c34',
          paddingVertical: 18,
          paddingLeft: 20,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View
          style={{
            marginRight: 10,
          }}>
          <Icon name="bars" size={25} color="#ffffff" />
        </View>

        <View style={{flex: 1}}>
          <Text
            style={{
              color: '#fafafa',
              fontSize: 18,
              fontWeight: 'bold',
              elevation: 3,
            }}>
            Kaimoji
          </Text>
        </View>
      </View>
      {/* End of Header */}

      {/* Flat List */}
      <View>
        <FlatList
          data={dataAdm}
          style={{
            marginHorizontal: 20,
            marginVertical: 10,
          }}
          renderItem={({item, index}) => (
            <View
              style={{
                elevation: 3,
                backgroundColor: '#2e86c1',
                padding: 10,
                marginBottom: 8,
                borderRadius: 10,
              }}>
              <TouchableOpacity style={{flexDirection: 'row'}} onPress={()=> copyKecamatan(item)}>
                <View style={{flex: 1}}>
                  <Text
                    style={{
                      color: '#fafafa',
                    }}>
                    {index + 1}. Kecamatan: {item}
                  </Text>
                </View>
                <View>
                  <Icon name="copy" style={{marginHorizontal: 10}} color="#fafafa" />
                </View>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
      {/* End of Flat List */}
    </View>
  );
};

export default App;
