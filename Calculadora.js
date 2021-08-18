import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default class Calculadora extends Component {
  constructor(props) {
    super(props);
    this.state = {
        // declaración de todas las variables
    };
  }

  render() {
    return (
        // Aquí va la programación de js de los btns y func.
      <View>
        <Text style={styles.titulo}> Calculadora </Text>
        <View style={styles.btn1}>
            <Button title="1" />
        </View>
        <View style={styles.btn2}>
            <Button title="2" />
        </View>
        <View style={styles.btn3}>
            <Button title="3" />
        </View>
      </View>
    );
  }
}
// Aquí empieza la parte de estilos de los objetos
const styles = StyleSheet.create({
    titulo: {
        fontSize: 30,
        color: 'red',
        textAlign: 'center',
        marginTop: 20,
    },
    btn1: {
        height: 50,
        width: 50,
        marginLeft: 80,
        marginTop: 80
    },
    btn2: {
        height: 50,
        width: 50,
        marginLeft: 160,
        marginTop: -50
    },
    btn3: {
        height: 50,
        width: 50,
        marginLeft: 240,
        marginTop: -50
    }
})