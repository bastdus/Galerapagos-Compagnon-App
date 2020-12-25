import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';

export const MusicPlayer = () => {
    const [sound, setSound] = useState();
    const [isPlaying, setIsplaying] = useState(false)

    async function playSound() {
        setIsplaying(true)
        const { sound } = await Audio.Sound.createAsync(
        require('../../assets/music/sound.mp3')
        );
        setSound(sound);
        sound.setIsLoopingAsync(true)
        await sound.playAsync();
    }

    async function pauseSound() {
        setIsplaying(false)
        await sound.pauseAsync();
    }

    useEffect(() => {
        return sound ? () => {
            sound.unloadAsync(); }
        : undefined;
    }, [sound]);
    
    if (isPlaying) {
        return (
            <TouchableOpacity style={{zIndex:1000}} onPress={pauseSound}>
                <Image
                    style={styles.audio}
                    source={require('../../assets/img/audio-on.png')}
                />
            </TouchableOpacity>
        )
    }
    return (
        <TouchableOpacity style={{zIndex:1000}} onPress={playSound}>
            <Image
                style={styles.audio}
                source={require('../../assets/img/audio-off.png')}
            />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    audio: {
        height: 20,
        width: 20
    }
})