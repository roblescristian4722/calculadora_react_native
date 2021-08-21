import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import NumericPad from './NumericPad'

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
        <NumericPad/>
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
})
