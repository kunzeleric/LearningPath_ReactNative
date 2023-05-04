import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Switch, TextInput, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

/*
BANCO Sujeito:

1 - Nome (TextInput) OK
2 - Idade (TextInput) OK
3 - Sexo( Picker) OK
4 - Seu limite (Slider)OK
5 - Estudante (Switch)
Botão > abrir conta > mostrar os dados em alert ou no console

*/
export default function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [sex, setSex] = useState(0);
  const [sexOptions, setSexOptions] = useState([
    {
      key: 1, name: 'Male'
    },
    {
      key: 2, name: 'Female'
    },
    {
      key: 3, name: 'I would rather not say'
    }
  ])
  const [limit, setLimit] = useState(0);
  const [isStudent, setIsStudent] = useState(false);

  const optionsSex = sexOptions.map((value, key) => {
    return <Picker.Item key={key} value={key} label={value.name} />
  })

  const handleSubmit = () => {
    alert(`
    Data Sent:\n
    Name: ${name}
    Age: ${age}
    Sex: ${sex}
    Limit: ${limit}
    Student: ${isStudent}
    
    `)
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.headerTitle}>Welcome to the Bank! Please subscribe below.</Text>

        <View style={styles.container}>
          <Text style={styles.textLabel}>Name</Text>
          <TextInput
            style={styles.textInput}
            placeholder='Type your name here'
            value={name}
            onChangeText={(name) => setName(name)}
          />

        </View>

        <View style={styles.container}>
          <Text style={styles.textLabel}>Age</Text>
          <TextInput
            style={styles.textInput}
            placeholder='Type your age here'
            value={age}
            onChangeText={(age) => setAge(age)}
          />
        </View>

        <View style={styles.pickerContainer}>
          <Text style={styles.textLabel}>Sex</Text>
          <Picker
            selectedValue={sex}
            onValueChange={(itemSelected) => setSex(itemSelected)}
          >
            {optionsSex}
          </Picker>
        </View>

        <View style={styles.container}>
          <Text style={styles.textLabel}>Limit</Text>
          <Slider
            minimumValue={0}
            maximumValue={10000}
            step={1000}
            value={limit}
            onValueChange={(newLimit) => setLimit(newLimit)}
            thumbTintColor='green'
            minimumTrackTintColor='green'
            style={{width: 300}}
          />
          <Text style={styles.sliderInfo}>{limit.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</Text>
        </View>

        <View style={styles.container}>
          <Text style={styles.textLabel}>Are you a student?</Text>
          <Switch
            value={isStudent}
            onValueChange={(selectedValue) => setIsStudent(selectedValue)}
            thumbColor={isStudent ? 'green' : 'red'}
          />
        </View>

      <Button 
      title={'Submit'}
      color={'green'}
      onPress={handleSubmit}
      />
      </View>
    </ScrollView>


  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 25,
    color: 'green',
    textAlign: 'center',
  },
  textInput: {
    fontSize: 20,
    borderWidth: 2,
    borderColor: 'green',
    width: 300,
    paddingLeft: 10,
    borderRadius: 8,
  },
  textLabel: {
    color: 'green',
    fontSize: 22,
    marginTop: 15,
    marginBottom: 10,
    textAlign: 'center',
  },
  sliderInfo: {
    fontSize: 15,
    color: 'green',
    textAlign: 'center'
  },
  pickerContainer: {
    width: 300,
  }


});

