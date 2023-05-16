import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

export default function Usuario({data}) {
  return (
    <View style={styles.usuarios}>
      <Text style={styles.usuarioCampo}>Nome: {data.nome}</Text>
      <Text style={styles.usuarioCampo}>Cargo: {data.cargo}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  usuarios: {
    backgroundColor: '#121212',
    height: 250,
    marginTop: 10,
    justifyContent: 'center',
  },
  usuarioCampo: {
    color: '#fff',
    fontSize: 17,
    textAlign: 'center',
    padding: 5,
  },
});
