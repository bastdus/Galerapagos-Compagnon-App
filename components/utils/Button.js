import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

export const Button = ({text, color, size, action}) => {
    
    size ? size : size = 'normal'

    return (
        <TouchableOpacity
            accessibilityRole='button'
            onPress={action}
            style={[styles.defaultContainer, styles[color]]}
        >
            <Text style={[styles.default, styles[size], {
                color: '#fff',
                fontWeight: 'bold'
            }]}>{text}</Text>
        </TouchableOpacity>
    )
}

export const deleteButton = () => {
    return (
        <TouchableOpacity
            accessibilityRole='button'
            onPress={action}
            style={[styles.defaultContainer, styles[color]]}
        >
            <Text style={[styles.default, styles[size], {
                color: '#fff',
                fontWeight: 'bold'
            }]}>{text}</Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    default:{        
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    normal:{
        height: 70,
        lineHeight: 70,
    },
    small:{
        height: 40,
        lineHeight: 40,
    },
    defaultContainer: {
        width: 250,
        margin: 5,
        borderRadius: 15,
        overflow: "hidden",
        alignSelf: 'center',
    },
    green: {
        borderColor: "#81b29a",
        backgroundColor: '#81b29a'
    },
    red: {
        borderColor: "#bc4749",
        backgroundColor: '#bc4749'
    },
    miniGreen:{
        borderColor: "#81b29a",
        backgroundColor: '#81b29a',
        width: 150
    },
    miniRed:{
        borderColor: "#bc4749",
        backgroundColor: '#bc4749',
        width: 150
    },
})