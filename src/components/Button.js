import React from 'react';
import {StyleSheet, Text, Dimensions, TouchableHighlight} from 'react-native';

const style = StyleSheet.create({
    button: {
        fontSize: 35,
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
        padding: 20,
        backgroundColor: '#f0f0f0',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: '#888',
    },
    operationButton: {
        color: '#fff',
        backgroundColor: '#0AA',
    },
    buttonDouble: {
        width: (Dimensions.get('window').width / 4) * 2,
    },
    buttonTriple: {
        width: (Dimensions.get('window').width / 4) * 3,
    },
});

export default props => {
    const stylesButton = [style.button];

    if (props.operation) {
        stylesButton.push(style.operationButton);
    }

    if (props.double) {
        stylesButton.push(style.buttonDouble);
    }

    if (props.triple) {
        stylesButton.push(style.buttonTriple);
    }

    return (
        <TouchableHighlight onPress={() => props.onClick(props.label)}>
            <Text style={stylesButton}>{props.label}</Text>
        </TouchableHighlight>
    );
};
