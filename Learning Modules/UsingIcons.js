import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Oi</Text>
      <FontAwesome name="home" size={35} color="#11118c" />
      <FontAwesome name="user" size={35} color="#54a300" />
      <Feather name="gift" size={65} color="#7665FF" />
      <TouchableOpacity style={styles.btnYoutube}>
        <FontAwesome name="youtube" size={25} color="#FFF" />
        <Text style={styles.btnText}>Acessar meu canal</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnYoutube: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    backgroundColor: '#FF0000',
  },
  btnText: {
    color: '#FFF',
    paddingLeft: 10,
  },
});
