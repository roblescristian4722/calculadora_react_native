import React, { Component } from 'react';
import { View, ToastAndroid, StyleSheet, Text, TouchableOpacity } from 'react-native';

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

    Message(press){
        ToastAndroid.show(`Presionaste: ${press}`, ToastAndroid.SHORT)
    }

    render() {
        return(
            <View>
                <View style={flexStyle.container}>
                {
                    this.state.buttons.map((_, i) =>
                        <View style={ flexStyle.row }>
                            {this.state.buttons[i].map(e =>
                                <TouchableOpacity onPress={() => this.Message(e)} style={flexStyle.btn}>
                                    <Text style={flexStyle.btnText}>{String(e)}</Text>
                                </TouchableOpacity>
                            )}
                        </View>                
                    )
                }
                </View>
                <View style={flexStyle.btnContainer}>
                    <View style={flexStyle.btnFlex}>
                        <TouchableOpacity style={flexStyle.btn}>
                            <Text style={flexStyle.btnText}>%</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={ flexStyle.eq }>
                        <TouchableOpacity style={flexStyle.btn}>
                            <Text style={flexStyle.btnText}>=</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

const flexStyle = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 60,
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
        marginBottom: 20,
    },
    btnFlex: {
        flex: 2,
    },
    eq: {
        flex: 6,
    },
    btn: {
        alignItems: 'center',
        backgroundColor: 'cyan',
        margin: 2,
        borderRadius: 8,
    },
    btnText: {
        padding: 20,
        fontSize: 28,
    }
})
