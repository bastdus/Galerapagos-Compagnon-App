import React, { useContext, useState } from 'react';
import { GameContext } from '../../utils/Providers';

import { Image, SafeAreaView, Text, View } from 'react-native';
import { Button } from '../../utils/Button';

import styles from "./Home.style"
import Setup from '../Setup/Setup';

const Home = () => {
    const {game} = useContext(GameContext)
    
    const [showSetup, setShowSetup] = useState(false)
    const [showInGame, setShowInGame] = useState(false)


    if (showSetup) {
        return <Setup goHome={()=>{setShowSetup(false)}} />
    }
    else if(showInGame) {
        return <InGame goHome={setShowInGame} />
    }
    return (
        <SafeAreaView>
            <Text style={styles.titleLarge}>Bienvenue sur</Text>
            <View>
                <Image
                    style={styles.logo}
                    source={require('../../../assets/img/logo.png')}
                />
            </View>
            <Text style={styles.titleSmall}>Compagnon App</Text>
            <Button action={()=>{setShowSetup(true)}} size='normal' color="green" text="Nouvelle partie" />
        </SafeAreaView>
    )
}

export default Home