import React from 'react';
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity, Modal } from 'react-native';

export default function Detalhes(props) {
    return (
        <View style={styles.container}>
            <View style={styles.modal}>
                <Text style={styles.titulo}>Seja bem vindo!!</Text>
                <Button title="Fechar!" onPress={props.fechar} />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 15,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    modal: {
        backgroundColor: '#292929',
        width: '100%',
        height: 350,
        borderRadius: 5,
    },
    titulo:{
        textAlign: 'center',
        fontSize: 25,
        color: '#FFF',
        padding: 20
    }

})