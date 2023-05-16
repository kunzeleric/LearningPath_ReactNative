import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList, Switch} from 'react-native';

export default function App() {
  const [status, setStatus] = useState(false);

  return (
    <View style={styles.container}>
      <Switch
        value={status}
        onValueChange={valorSelecionado => {
          setStatus(valorSelecionado);
        }}
        trackColor={'#121212'}
        thumbColor={'#FF00FF'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 35,
  },
});
