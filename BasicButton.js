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
      <View>
        <TouchableOpacity
          onPress={() => this.props.click(this.props.text)}
          style={[styles.btn, this.props.style]}>
          <Text style={styles.btnText}>{this.props.text}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  btn: {
    alignItems: 'center',
    backgroundColor: 'cyan',
    margin: 2,
    borderRadius: 8,
  },
  btnText: {
    padding: 20,
    fontSize: 28,
  },
})
