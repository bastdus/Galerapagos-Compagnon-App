import React, { useContext, useEffect, useRef, useState } from 'react';
import { Dimensions, SafeAreaView, ScrollView, Text, View } from 'react-native';
import { Button } from '../../utils/Button';
import { GameContext } from '../../utils/Providers';
import { SignatureScreen } from '../../utils/Signature';
import { shuffle } from '../../utils/Tools';

import styles from "./Vote.style"

const windowWidth = Dimensions.get('window').width;
const width = windowWidth > 739 ? 739 : windowWidth
const ratio = width/739; //739 is actual image width
const height = 1024 * ratio; //1024 is actual height of image

const Vote = ({finish}) => {
    const {game} = useContext(GameContext)
    const [count, setCount] = useState(0)
    const [i, setI] = useState(0)
    const [j, setJ] = useState(0)
    const [players, setPlayers] = useState([])

    const [scriptName, setScriptName] = useState([])

    const addName=()=>{setI(i+1)}
    const clearCanvas=()=>{setJ(j+1)}

    useEffect(()=>{
        setPlayers(shuffle(game.playersAlive))
    }, [])

    useEffect(()=>{
        if (count >= game.playersAlive.length) {
            finish(scriptName)
        }
    }, [count])
    

        
    return (    
        <SafeAreaView style={{flex: 1, alignItems: 'center', justifyContent: 'space-between'}}>
                <Text style={styles.titleLarge}>{players[count]}</Text>
                    {count < players.length-1 ?
                        <View style={{flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center'}}>
                            <Button text='X' color='red' size='small' action={clearCanvas} />
                            <Button text='V' color='green' size='small' action={addName} />
                        </View>
                    : 
                        <View style={{flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center'}}>
                            <Button text='X' color='red'  size='small' action={clearCanvas} />
                            <Button action={addName} text='V'  size='small' color='green' />
                        </View>
                    }
                    <SignatureScreen 
                        onClickNext={i}
                        playerCount={count}
                        setPlayersCount={setCount}
                        scriptName={scriptName}
                        setScriptName={setScriptName}
                        onClickClear={j}
                    />
        </SafeAreaView>
    )

}

export default Vote