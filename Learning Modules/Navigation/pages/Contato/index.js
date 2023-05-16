/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import { useNavigation, StackActions } from '@react-navigation/native';

export default function Contato() {

  const navigation = useNavigation();

  function handleHome(){
    navigation.dispatch(StackActions.popToTop());
  }

  return (
    <View style={styles.container}>
      <Text>Tela CONTATO</Text>
      <Button title="Voltar para Home" onPress={handleHome}/>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
