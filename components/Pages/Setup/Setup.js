import React, { useContext, useState } from 'react';
import { GameContext } from '../../utils/Providers';
import { Image, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Button } from '../../utils/Button';

import styles from "./Setup.style"

const Setup = ({goHome}) => {

    const {startGame} = useContext(GameContext)
    const [players, setPlayers] = useState([])
    const [inputValue, setInputValue] = useState('')

    const onInputChange = (value) => {
        setInputValue(value)
    }
    const addPLayer = player => {
        if (player) {
            setPlayers([player, ...players])
            setInputValue('')            
        }
    }
    const deletePlayer = name => {
        const arr = players.filter(item => item !== name)
        setPlayers(arr)
    }
    const deleteAll = () => {
        setPlayers([])
    }


    return (
        <SafeAreaView style={{width: "100%", height: '100%'}}>
            <ScrollView style={{padding: 20}} contentContainerStyle={{ alignItems: "center"}}>
                <Text style={styles.titleLarge}>Inscriptions</Text>
                <TextInput 
                    style={styles.textInput}
                    placeholderStyle={styles.default}
                    onChangeText = {onInputChange}
                    autoCapitalize = "none"
                    placeholder= 'Ajoutez un joueur'
                    placeholderTextColor='#808080'
                    value = {inputValue}
                />
    
                <Button action={()=>{addPLayer(inputValue)}} size='normal' color="green" text="OK" />
                
                <View style={styles.listItemContainer}>
                    {players && players.map((player, i)=> (
                        <View style={styles.listItem} key={i}>
                            <Text style={styles.name}>{player}</Text>
                            <TouchableOpacity style={styles.trashContainer} onPress={()=>{deletePlayer(player)}}>
                                <Image 
                                    style={styles.trash}
                                    source={require('../../../assets/img/delete.png')}
                                    />
                            </TouchableOpacity>
                        </View>
                    
                    ))}
                </View>

                {players.length > 0 ? (
                    <>
                    <Button text="C'est parti !" color='green' action={()=>{startGame(players)}} />
                    <Button action={()=>{deleteAll()}} text='Tout effacer' size='small' color='red' />
                    </>
                ) : 
                    <Button action={goHome} text='Accueil' size='small' color='red' />
                }
                

            </ScrollView>
        </SafeAreaView>
    )
}

export default Setup