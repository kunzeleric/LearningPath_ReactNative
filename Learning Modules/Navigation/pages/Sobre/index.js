/* eslint-disable prettier/prettier */
import React, { useLayoutEffect } from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

export default function Sobre() {
    const route = useRoute();
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            title: route.params?.nome === '' ? 'Página Sobre' : route.params?.nome,
        });
    }, [navigation]);

  return (
    <View style={styles.container}>
      <Text>Página SOBRE</Text>
      <Text>{route.params?.email}</Text>
      <Text>{route.params?.nome}</Text>
      <Button title="Tela Contatos" onPress={() => navigation.navigate('Contato')}/>
      <Button title="Voltar Tela" onPress={() => navigation.goBack()}/>
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
