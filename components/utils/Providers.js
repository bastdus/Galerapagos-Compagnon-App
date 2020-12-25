import React, { useContext, useEffect, createContext, useState } from 'react';
import { setLocalStorage, removeLocalStorage } from "./Tools";
import { useFonts } from 'expo-font';
import { getLocalStorage } from './Tools';

import { ActivityIndicator } from 'react-native';
import BaseStyle from './BaseStyle';

import Home from "../Pages/Home/Home";
import Dashboard from "../Pages/Dashboard/Dashboard";


export const GameContext = createContext({
    game: null,
    startGame: ()=>{},
    stopGame: ()=>{},
    resume: ()=>{},
    addPlayerDead: ()=>{}
});

export const GameProvider = ({children}) => {
    const [game, setGame] = useState(null)
    
    return (
        <GameContext.Provider value={{
            game,
            startGame: players => {
                setLocalStorage({playersAlive: players, playersDead:[]})
                    .then(setGame({playersAlive: players, playersDead:[]}))
            },
            stopGame: () =>{
                removeLocalStorage()
                .then(setGame(null))
            },
            resume: (gameFromLocalStorage) =>{
                setGame(JSON.parse(gameFromLocalStorage));
            },
            addPlayerDead: liste => {
                var newGame = {...game}

                for (let i = 0; i < liste.length; i++) {
                    let index = newGame.playersAlive.indexOf(liste[i])
                    newGame.playersDead.push(newGame.playersAlive[index])
                }
                for (let i = 0; i < liste.length; i++) {
                    let index = newGame.playersAlive.indexOf(liste[i])
                    newGame.playersAlive.splice(index, 1)                  
                }
                setLocalStorage(newGame)
                    .then(setGame(newGame))
            }
        }}>
            {children}
        </GameContext.Provider>
    );
};


export const Providers = () => {
    return (
        <GameProvider>
            <Init />
        </GameProvider>
    );
};



export const Init = () => {
    const {game, resume, stopGame} = useContext(GameContext)

    const [loading, setLoading] = useState(true) 

    useEffect(()=>{
        (async () => {
            getLocalStorage()
                .then(game => {
                    game ? resume(game) : stopGame()
                })
        })()
        setLoading(false)
    }, [])

    const [fontsLoaded] = useFonts ({
        CevicheOne: require('../../assets/fonts/CevicheOne-Regular.ttf')
    });

    if (!fontsLoaded || loading) {
        return (
            <BaseStyle>
                <ActivityIndicator size="large" color="#57B5B5"/>        
            </BaseStyle>
        )
    }

    if (game) {
        return(
            <BaseStyle>
                <Dashboard gameData={game, stopGame} />
            </BaseStyle>
        )
    }
    return (
            <BaseStyle>
                <Home />
            </BaseStyle>
    )
};