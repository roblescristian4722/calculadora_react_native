import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ToastAndroid } from 'react-native';
import BasicButton from './BasicButton';
import NumericPad from './NumericPad'

export default class Calculadora extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: null,
      aux: null,
      op: null,
      period: false,
      validOp: ['+', '-', '*', '/', '%'],
    };
  }

  calculate() {
    var localResult = 0
    switch (this.state.op) {
      case '+':
        localResult = this.state.aux + parseFloat(this.state.result)
      break;
      case '-':
        localResult = this.state.aux - parseFloat(this.state.result)
      break;
      case '*':
        localResult = this.state.aux * parseFloat(this.state.result)
      break;
      case '/':
        localResult = this.state.aux / parseFloat(this.state.result)
      break;
      case '%':
        localResult = this.state.aux % parseFloat(this.state.result)
      break;
    }
    return localResult
  }

  operation(press) {
    if (this.state.validOp.includes(press)) {
      var localAux
      if (this.state.result != null && this.state.aux != null)
        localAux = this.calculate()
      else
        localAux = parseFloat(this.state.result)
      this.setState({ op: press, aux: localAux, result: null, period: false })
    }
    else if (press === 'AC')
        this.setState({ result: null, aux: null, op: null, period: false })
    else if (press === '=' && this.state.op !== null)
        this.setState({ result: this.calculate(), aux: null, period: false })
  }

  getData = (press) => {
    if (parseFloat(press) >= 0 && parseFloat(press) <= 9) {
      if (this.state.result === null)
        this.setState({ result: String(press), pending: false })
      else
        this.setState({ result: this.state.result + String(press) })
    }
    else if (press === '.' && this.state.period === false && this.state.result != null)
      this.setState({ result: this.state.result + String(press), period: true })
    else
      this.operation(press)
  }

  render() {
    return (
      <View style={style.appContainer}>

        <View style={style.resContainer}>
          <Text style={style.op}>{this.state.op}</Text>
          <Text style={style.result}>{this.state.result}</Text>
        </View>
        <NumericPad style={style.numPad} getData={this.getData}/>
      </View>
    );
  }
}

const style = StyleSheet.create({
  appContainer: {
    height: '100%',
    backgroundColor: '#2e3639',
  },
  resContainer: {
    flex: 1,
    marginLeft: '2.5%',
    width: '95%',
    borderWidth: 4,
    borderColor: '#c6c6c6',
    marginTop: '3%',
    flexDirection: 'row',
  },
  result: {
    color: 'white',
    textAlign: 'right',
    margin: 5,
    fontSize: 62,
    flex: 9,
  },
  op: {
    color: 'white',
    fontSize: 28,
    flex: 1,
    margin: 5,
  },
  numPad: {
    margin: 5,
    flex: 5,
  }
})
