import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import BasicButton from './BasicButton';

export default class NumericPad extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttons: [
        ['7', '4', '1', '0'],
        ['8', '5', '2', '.'],
        ['9', '6', '3', '/'],
        ['AC', '+', '-', '*']
      ],
    }
  }

  render() {
    return(
      <View style={[style.container, {...this.props.style}]}>

        <View style={style.grid}>
          {
            this.state.buttons.map((_, i) =>
              <View key={i} style={ style.row }>
                {this.state.buttons[i].map((e, i) =>
                  <BasicButton key={i} click={this.props.getData} text={String(e)}/>
                )}
              </View>
            )
          }
        </View>

        <View style={style.bottomContainer}>
          <View style={style.moduleBtn}>
            <BasicButton text='%' click={this.props.getData}/>
          </View>
          <View style={ style.equalBtn }>
            <BasicButton text='=' click={this.props.getData}/>
          </View>
        </View>

      </View>
    )
  }
}

const style = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  grid: {
    flex: 4,
    flexDirection: 'row',
  },
  row: {
    flex: 1,
  },
  bottomContainer: {
    flexDirection: 'row',
    flex: 1,
  },
  moduleBtn: {
    flex: 2,
  },
  equalBtn: {
    flex: 6,
  }
})
