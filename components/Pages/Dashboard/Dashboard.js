import React, { useContext, useState } from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import { Button } from '../../utils/Button';
import { GameContext } from '../../utils/Providers';
import { shuffle } from '../../utils/Tools';
import Result from '../Result/Result';
import Vote from '../Vote/Vote';

import styles from "./Dashboard.style"


const Dashboard = () => {
    const {game, stopGame} = useContext(GameContext)
    const [voting, setVoting] = useState(false)
    const [showResult, setShowResult] = useState(false)
    const [result, setResult] = useState(null)

    const endVoting = resultFromVote => {
        setResult(shuffle(resultFromVote))
        setVoting(false)
        setShowResult(true)
    }

    const endRound = resultFromVote => {
        setVoting(false)
        setShowResult(false)
    }

    if (voting) {
        return <Vote finish={endVoting} />
    }
    else if (showResult) {
        return <Result endRound={endRound} data={result} />
    }
    return (    
        <SafeAreaView style={{width: "100%", height: '100%'}}>
            <ScrollView contentContainerStyle={styles.container} >
                <Text style={styles.titleLarge}>Survivants :</Text>
                <View style={styles.listePlayer}>
                    {game && game.playersAlive.map((player, i) => (<Text style={styles.playerNameAlive} key={i}>{player}</Text> ))}
                </View>

                {game && game.playersDead.length > 0 ? <Text style={styles.titleLarge}>Morts :</Text> : <></>}
                <View style={styles.listePlayer}>
                    {game && game.playersDead.map((player, i) => (<Text style={styles.playerNameDead} key={i}>{player}</Text> ))}
                </View>

                <Button text="Nouveau vote" color="green" action={()=>{setVoting(true)}} />

                <View style={{marginTop: 50}}>
                    <Button text='Arrêter la partie' color='red' size='small' action={()=>{stopGame()}} />
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

export default Dashboard