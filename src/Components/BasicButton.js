import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default class BasicButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  handlePress = () => {
  }

  render() {
    return (
      <TouchableOpacity
          onPress={() => this.props.click(this.props.text)}
          style={[styles.btn, {...this.props.style}]}>
          <Text style={styles.btnText}>{this.props.text}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  btn: {
    alignItems: 'center',
    backgroundColor: '#656b6d',
    flex: 1,
    margin: 3,
    borderRadius: 10,
    justifyContent: 'center',
  },
  btnText: {
    padding: 20,
    fontSize: 34,
    color: '#c6c6c6',
  },
})
