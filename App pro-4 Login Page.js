/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StatusBar,
  TextInput,
  Touchable,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
} from 'react-native';

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <ScrollView contentContainerStyle={styles.containerSchroll}>
      <View
        style={{
          backgroundColor: '#fafafa',
        }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom:25,
          }}>
          <Image
            source={require('./src/images/descan.png')}
            style={styles.image}
          />
        </View>
        <Text style={{textAlign: 'center', fontSize: 20, fontWeight: 'bold'}}>
          Login
        </Text>
        <Text style={{textAlign: 'center', fontSize: 16, marginTop: 5}}>
          Silahkan masukan username dan password
        </Text>
        <TextInput
          editable
          value={email}
          style={styles.textInput}
          placeholder="Masukan Email ..."
          onChangeText={text => setEmail(text)}
        />

        <TextInput
          editable
          value={email}
          style={styles.textInput}
          placeholder="Masukan Password ..."
          secureTextEntry={true}
          onChangeText={pass => setPassword(pass)}
        />

        <TouchableOpacity
          style={[styles.buttonLogin, {marginBottom:0}]}>
          <Text style={{color: '#fafafa', fontWeight: 'bold'}}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.buttonLogin, {backgroundColor:'#5dade2'}]}>
          <Text style={{color: '#fafafa', fontWeight: 'bold'}}>Register</Text>
        </TouchableOpacity>

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  containerSchroll : {
    flexGrow:1,
    justifyContent:'center',
  },

  image : {
    width: 100,
    height: 100,
    resizeMode:'contain',
  },

  textInput : {
    backgroundColor: '#fafafa',
    elevation: 1,
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 10,
    paddingLeft: 15,
  },

  buttonLogin : {
    backgroundColor: '#3498db',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    borderRadius: 10,
    elevation: 1,
    paddingVertical: 15,
    marginHorizontal: 20,
  },
});

export default App;
