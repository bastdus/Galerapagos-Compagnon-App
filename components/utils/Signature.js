import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, View, Dimensions, Text } from 'react-native';
import Signature from 'react-native-signature-canvas';
import { Parchemin } from "../../assets/img/Parchemin64";

const windowWidth = Dimensions.get('window').width;
const width = windowWidth > 1024 ? 1024 : windowWidth
const ratio = width/1024; //1024 is actual image width
const height = 739 * ratio; //739 is actual height of image


export const SignatureScreen = ({onClickNext, onClickClear, playerCount, setPlayersCount, scriptName, setScriptName}) => {
    const [error, setError] = useState(false)
    const ref = useRef();

    // au click de 'suivant' on check si c'est écrit ou pas
    useEffect(()=>{
        ref.current.readSignature();
    },[onClickNext])

    // si on click sur 'effacer'
    useEffect(()=>{
        ref.current.clearSignature();
    },[onClickClear])
    
    // si on passe au suivant
    useEffect(()=>{
        ref.current.clearSignature();
    },[playerCount])


    const aVoter = newScripName => {
        setScriptName([
            ...scriptName,
            newScripName
        ])
        setPlayersCount(playerCount+1)
    };

    const isEmpty = () => {
        setError(true)
        setTimeout(() => {
            setError(false)
        }, 3000);
    }

    const style = `
        html, body, div, span, applet, object, iframe,
        h1, h2, h3, h4, h5, h6, p, blockquote, pre,
        a, abbr, acronym, address, big, cite, code,
        del, dfn, em, img, ins, kbd, q, s, samp,
        small, strike, strong, sub, sup, tt, var,
        b, u, i, center, dl, dt, dd, ol, ul, li,
        fieldset, form, label, legend, table, caption,
        tbody, tfoot, thead, tr, th, td, article,
        aside, canvas, details, embed, figure, figcaption,
        footer, header, hgroup, menu, nav, output, ruby, 
        section, summary, time, mark, audio, video {
        margin: 0;padding: 0;border: 0;font-size: 100%;
        font: inherit;vertical-align: baseline;}
        article, aside, details, figcaption, figure, 
        footer, header, hgroup, menu, nav, section {
        display: block;}body{line-height: 1;}ol, ul {
        list-style: none;}blockquote, q {quotes: none;}
        blockquote:before, blockquote:after,q:before, 
        q:after {content: '';content: none;}table {
        border-collapse: collapse;border-spacing: 0;}

        img { max-width: 100% }
        html{
            background: transparent;
        }
        body {
            background: #fae8c9;
            overflow: visible;
        }
        .m-signature-pad--footer .button {
            display: none
        }
        .m-signature-pad--footer .description {
            display: none
        }
        .m-signature-pad {
            margin: 0;
            border: none;
            background: url('${Parchemin}');
            background-size: contain;
            background-repeat: no-repeat;
            background-color: transparent;
            box-shadow: none;
        }
        .m-signature-pad--body {
            border: none;
            background: rgba(0,0,0,0);
        }
        .m-signature-pad--body canvas {
            border-radius: 0;
        }
        .m-signature-pad:before, .m-signature-pad:after {
            display: none
        }`;

    return (
        <View style={{height: height, width: width, alignItems: 'center', justifyContent: 'center', overflow: 'hidden'}}>
            <Signature
                ref = {ref}
                onOK={aVoter}
                onEmpty={isEmpty}
                clearText="Effacer"
                confirmText="Voter"
                webStyle={style}
                minWidth={7}
            />
            {error && <Text style={styles.error}>Veuillez écrire un nom {'\n\n'} (promis ça restera entre nous)</Text>}
        </View>
    );
}

const styles = StyleSheet.create({
    error: {
        position: 'absolute',
        top: height/2-150,
        textAlign: 'center',
        color: "#bc4749",
        fontWeight: 'bold',
        fontSize: 40,
        width: "100%",
        padding: 20
    }
});