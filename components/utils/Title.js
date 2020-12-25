import React from 'react';
import { Text } from 'react-native';

export const H1 = ({children}) =>{
    return (
        <Text 
            accessibilityRole="header"
            style={{
                fontFamily: "ParisienNight",
                color: "#57B5B5",
                textAlign: 'center',
                fontSize: 35,
                padding: 10,
                width: '100%'
            }}
        >
            {children}
        </Text>
    )
}

export const H2 = ({children}) =>{
    return (
        <Text 
            accessibilityRole="header"
            aria-level="2"
            style={{
                fontFamily: 'Roboto',
                textAlign: 'center',
                color: '#57B5B5',
                fontSize: 25,
                width: '100%'
            }}
        >
            {children}
        </Text>
    )
}

export const H2Small = ({children}) =>{
    return (
        <Text 
            accessibilityRole="header"
            aria-level="2"
            style={{
                fontFamily: 'Roboto',
                textAlign: 'center',
                color: '#57B5B5',
                fontSize: 16,
                textDecorationLine: 'underline',
                width: '100%'
            }}
        >
            {children}
        </Text>
    )
}

export const H3 = ({children}) =>{
    return(
        <Text
            style={{
                fontFamily: 'Roboto',
                textAlign: 'center',
                color: '#57B5B5',
                fontSize: 15,
                width: '100%'
            }}
        >
            {children}
        </Text>
    )
}

export const Strong = ({children}) =>{
    return(
        <Text
            style={{
                fontFamily: 'RobotoBold',
                textAlign: 'center',
                color: '#57B5B5',
                fontSize: 25,
                width: '100%'
            }}
        >
            {children}
        </Text>
    )
}

export const StrongSmall = ({children}) =>{
    return(
        <Text
            style={{
                fontFamily: 'RobotoBold',
                textAlign: 'center',
                color: '#57B5B5',
                fontSize: 16,
                width: '100%'
            }}
        >
            {children}
        </Text>
    )
}



export const Warning = ({children}) =>{
    return(
        <Text
            style={{
                fontFamily: 'Roboto',
                textAlign: 'center',
                color: '#f68f6a',
                fontSize: 15,
                width: '100%'
            }}
        >
            {children}
        </Text>
    )
}