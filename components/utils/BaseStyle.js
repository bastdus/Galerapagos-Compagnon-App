import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, ImageBackground } from 'react-native';
import { MusicPlayer } from './MusicPlayer';

const BaseStyle = ({children}) => {
    return (
        <View style={{
                flex:1,
                flexDirection: 'column',
            }}
        >
            <StatusBar hidden translucent />

            <ImageBackground
                source={require("../../assets/img/background.jpg")}
                imageStyle={{resizeMode: 'repeat'}}
                style={{
                    flex: 1,
                    width: '100%',
                    backgroundColor: "#fae8c9",
                }}>
                <View style={{
                    flex:1,
                    width: '100%',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <View style={{position: 'absolute', top: 10, right: 10, zIndex: 1000}}>
                        <MusicPlayer />
                    </View>
                    {children}
                </View>
            </ImageBackground>
        </View>
    );
}

export default BaseStyle;