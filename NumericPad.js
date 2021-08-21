import React, { Component } from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';

export default class NumericPad extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buttons: [
                ['1', '4', '7', '0'],
                ['2', '5', '8', '.'],
                ['3', '6', '9', '/'],
                ['AC', '+', '-', '*']
            ] 
        }
    }
    render() {
        return(
            <View>
                <View style={flexStyle.container}>
                {
                    this.state.buttons.map((_, i) =>
                        <View style={flexStyle.row}>
                            {this.state.buttons[i].map(e =>
                                <Button title={String(e)}/>
                            )}
                        </View>                
                    )
                }
                </View>
                <View style={flexStyle.btnContainer}>
                    <View style={flexStyle.btnExtra}>
                        <Button title='%'/>
                    </View>
                    <View style={flexStyle.eq}>
                        <Button title='='/>
                    </View>
                </View>
            </View>
        )
    }
}

const flexStyle = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
    },
    row: {
        flex: 1,
    },
    btnContainer: {
        flexDirection: 'row',
        marginRight: 20,
        marginLeft: 20,
    },
    btnExtra: {
        flex: 2,
    },
    eq: {
        flex: 6,
    }
})
