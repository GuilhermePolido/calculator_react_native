import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
    display: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: '#888',
        alignItems: 'flex-end',
    },
    displayValue: {
        fontSize: 60,
        color: '#fff',
    },
    secondaryValue: {
        color: '#fff',
        fontSize: 20,
    },
});

export default props => {
    return (
        <View style={styles.display}>
            <Text style={styles.secondaryValue}>{props.secondaryValue}</Text>
            <Text style={styles.displayValue} numberOfLines={1}>
                {props.value}
            </Text>
        </View>
    );
};
