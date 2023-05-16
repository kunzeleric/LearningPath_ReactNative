import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './src/pages/Home';
import Sobre from './src/pages/Sobre';
import Contato from './src/pages/Contato';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Tela Inicial',
            headerStyle: {
              backgroundColor: '#121212',
            },
            headerTintColor: '#FFF',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Sobre"
          component={Sobre}
          options={{
            title: 'Tela Sobre',
            headerStyle: {
              backgroundColor: '#126699',
            },
            headerTintColor: '#FFF',
          }}
        />
        <Stack.Screen name="Contato" component={Contato} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
