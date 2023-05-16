import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import Usuario from './src/Usuario';

/*
DESAFIO:

Titulo > Seja Bem Vindo
Usuario > via props => nome, cargo

*/

export default function App() {
  const [listaUsuarios, setListaUsuarios] = useState([
    {id: 1, nome: 'Eric', cargo: 'Desenvolvedor Front-end'},
    {id: 2, nome: 'Henrique', cargo: 'Desenvolvedor Full-stack'},
    {id: 3, nome: 'Gui', cargo: 'Desenvolvedor Full-stack'},
    {id: 4, nome: 'Xapa', cargo: 'Desenvolvedor Front-end'},
    {id: 5, nome: 'Zoboo', cargo: 'Desenvolvedor Back-end'},
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Seja bem-vindo!</Text>

      <FlatList
        data={listaUsuarios}
        renderItem={({item}) => <Usuario data={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25,
  },
  titulo: {
    fontSize: 20,
    color: '#121212',
    textTransform: 'uppercase',
    textAlign: 'center',
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
});
