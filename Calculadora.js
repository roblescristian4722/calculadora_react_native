import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ToastAndroid } from 'react-native';
import BasicButton from './BasicButton';

export default class Calculadora extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttons: [
        ['1', '4', '7', '0'],
        ['2', '5', '8', '.'],
        ['3', '6', '9', '/'],
        ['AC', '+', '-', '*']
      ],
      result: null,
      aux: 0,
      op: null,
      period: false,
      validOp: ['+', '-', '*', '/', '%'],
    };

  }

  calculate() {
    var localResult = 0
    switch (this.state.op) {
      case '+':
        localResult = this.state.aux + parseInt(this.state.result)
      break;
      case '-':
        localResult = this.state.aux - parseInt(this.state.result)
      break;
      case '*':
        localResult = this.state.aux * parseInt(this.state.result)
      break;
      case '/':
        localResult = this.state.aux / parseInt(this.state.result)
      break;
      case '%':
        localResult = this.state.aux % parseInt(this.state.result)
      break;
    }
    this.setState({ op: null, result: localResult, aux: 0, period: false })
  }

  operation(press) {
    if (this.state.validOp.includes(press)) {
      let localAux = parseInt(this.state.result)
      this.setState({ op: press, aux: localAux, result: 'Ans', period: false })
    }
    else if (press === 'AC')
        this.setState({ result: null, aux: 0, op: null, period: false })
    else if (press === '=') {
      if (this.state.op !== null)
        this.calculate()
      else
        this.setState({ result: null, aux: 0, op: null, period: false })
    }
  }

  getData = (press) => {
    if (parseInt(press) >= 0 && parseInt(press) <= 9) {
      if (this.state.result === null || this.state.result === 'Ans')
        this.setState({ result: String(press) })
      else
        this.setState({ result: this.state.result + String(press) })
    }
    else if (press === '.' && this.state.period === false) {
      this.setState({ result: this.state.result + String(press), period: true })
    }
    else
      this.operation(press)
  }

  render() {
    return (
      <View style={style.appContainer}>

        <View style={style.resContainer}>
          <Text style={style.result}>{this.state.result}</Text>
        </View>

        <View style={style.numPad}>

          <View style={style.container}>
          {
            this.state.buttons.map((_, i) =>
              <View key={i} style={ style.row }>
                {this.state.buttons[i].map((e, i) =>
                  <BasicButton key={i} click={this.getData} text={String(e)}/>
                )}
              </View>
            )
          }
          </View>

          <View style={style.btnContainer}>
            <View style={style.btnFlex}>
              <BasicButton click={this.getData} text='%'/>
            </View>
            <View style={ style.eq }>
              <BasicButton text='=' click={this.getData}/>
            </View>

          </View>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
    numPad: {
        height: '100%',
        marginLeft: '5%',
        marginRight: '5%',
    },
    appContainer: {
        flexDirection: 'column',
        height: '100%',
    },
    container: {
        flexDirection: 'row',
    },
    row: {
        flex: 1,
    },
    btnContainer: {
        flexDirection: 'row',
    },
    btnFlex: {
        flex: 2,
    },
    eq: {
        flex: 6,
    },
    resContainer: {
        marginLeft: '7%',
        width: '86%',
        borderWidth: 2,
        borderColor: 'white',
        marginTop: 40,
    },
    result: {
        color: 'white',
        textAlign: 'right',
        margin: 2,
    },
})
