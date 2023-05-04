import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function App() {
  const [carroSelecionado, setCarroSelecionado] = useState(0);
  const [carros, setCarros] = useState([
    {key: 1, nome: "Golf 1.6", valor: 62.000},
    {key: 2, nome: "Savero 1.6", valor: 50.000},
    {key: 3, nome: "Fox 1.6", valor: 26.000},
    {key: 4, nome: "BMW", valor: 126.000},
    {key: 5, nome: "Uno 1.0", valor: 20.000}
  ]);

  let carrosItem = carros.map((value, key) => {
    return <Picker.Item key={key} value={key} label={value.nome}/>
  })

  return (
    <View style={styles.container} >
      <Picker
      selectedValue={carroSelecionado}
      onValueChange={(itemValue, itemIndex) => setCarroSelecionado(itemValue)}
      >

        {carrosItem}
      </Picker>

      <Text style={styles.carros}>Carro: {carros[carroSelecionado].nome}</Text>
      <Text style={styles.carros}>R$: {carros[carroSelecionado].valor.toFixed(3)}</Text>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 35,
  },
  carros:{
    marginTop: 15,
    fontSize: 25,
  }


});

