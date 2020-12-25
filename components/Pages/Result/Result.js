import React, { createRef, useContext, useEffect, useRef, useState } from 'react';
import { Animated, Dimensions, Image, ImageBackground, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Button } from '../../utils/Button';
import { GameContext } from '../../utils/Providers';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'
import torchOn from '../../../assets/img/torch-on.png'
import torchOff from '../../../assets/img/torch-off.png'
import Parchemin from '../../../assets/img/parchemin.jpg'

import styles from "./Result.style"


const windowWidth = Dimensions.get('window').width;
const width = windowWidth > 739 ? 739 : windowWidth
const ratio = windowWidth/739; //512 is actual image width
const height = 1024 * ratio; //1965 is actual height of image

const Result = ({endRound, data}) => {
    const {game, addPlayerDead} = useContext(GameContext)

    const [loading, setLoading] = useState(true)
    const [showList, setShowList] = useState(false)
    const [count, setCount] = useState(0)
    const [selected, setSelected] = useState([])
    const [nameList, setNameList] = useState([])


    const deletePlayer = (i) => {
        const newSelected = [...selected]
        const newNameList = [...nameList]
        const onClickName = game.playersAlive[i]
        const indexOfI = selected.indexOf(i)
        const indexOfName = nameList.indexOf(onClickName)
        
        if (indexOfI > -1) {
            newSelected.splice(indexOfI, 1);
            newNameList.splice(indexOfName, 1);
            setSelected(newSelected)
            setNameList(newNameList)
        } else {
            setSelected([
                ...selected,
                i
            ])
            setNameList([
                ...nameList,
                onClickName
            ])
        }
    };

    const onValidate = async () => {
        addPlayerDead(nameList)
        setSelected([])
        endRound()

    }

    useEffect(() => {
        if (count >= data.length) {
            console.log('fin');
            setShowList(true)
            return
        }
        if (!loading) {
            const interval = setInterval(() => {
                setCount(count + 1);
            }, 4000);
            return () => clearInterval(interval);
        }
    }, [count, loading]);
    
    if (loading) {
        return (
            <SafeAreaView style={styles.container}>
                <Text style={styles.titleLarge}>Dépouillement dans :</Text>
                <CountdownCircleTimer
                    isPlaying
                    duration={10}
                    colors={[
                        ['#81b29a', 0.4],
                        ['#F7B801', 0.4],
                        ['#A30000', 0.2],
                    ]}
                    onComplete={() => {
                        setLoading(false)
                    }}
                >
                    {({ remainingTime, animatedColor }) => (
                    <Animated.Text style={{ color: animatedColor, fontSize: 50, fontWeight: 'bold' }}>
                        {remainingTime}
                    </Animated.Text>
                    )}
                </CountdownCircleTimer>
            </SafeAreaView>
        )
    } else {
        if (showList) {
            return (
                <SafeAreaView style={styles.container}>
                    <ScrollView contentContainerStyle={{justifyContent: "space-around",alignItems: 'center', paddingTop: 30}}>
                        <View style={styles.listItemContainer}>
                            {game.playersAlive.map((player, i)=> (
                                <View style={styles.listItem} key={i}>
                                    <Text style={styles.name}>{player}</Text>
                                    <TouchableOpacity style={styles.trashContainer} onPress={()=>{deletePlayer(i)}}>
                                        <Image
                                            style={styles.trash}
                                            source={ selected.indexOf(i) > -1 ? torchOff : torchOn}
                                        />
                                    </TouchableOpacity>
                                </View>
                            ))}
                            <Button text='Valider' color='green' action={onValidate} />
                        </View>

                        <View style={styles.listeImage}>
                            {data.map((uri, i)=>(
                                <ImageBackground key={i} source={Parchemin} style={styles.imageSmall}>
                                    <Image
                                        resizeMode={"contain"}
                                        style={{ height: 200, width: (200/739)*1024}}
                                        source={{ uri: uri }}
                                    />
                                </ImageBackground>
                            ))}
                        </View>
                    </ScrollView>
                </SafeAreaView>
            )
        } else {
            return (
                <SafeAreaView style={{width: "100%", height: '100%', alignItems: 'center'}}>
                        <ImageBackground source={Parchemin} style={styles.image}>
                            <Image
                                resizeMode={"contain"}
                                style={{ width: width, height: height }}
                                source={{ uri: data[count] }}
                            />
                        </ImageBackground>
                </SafeAreaView>
            )
        }
    }
}
export default Result