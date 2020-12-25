import { Dimensions, StyleSheet } from 'react-native';


var windowWidth = Dimensions.get('window').width;
windowWidth = windowWidth > 600 ? 600 : windowWidth

const ratio = windowWidth/512; //512 is actual image width

export default StyleSheet.create({
    titleLarge:{
        fontFamily: "CevicheOne",
        fontSize: 60,
        color: "#cdbc9e",
        textAlign: 'center'
    },
    playerNameAlive:{
        fontFamily: "CevicheOne",
        fontSize: 60,
        color: "#81b29a",
    },
    playerNameDead:{
        fontFamily: "CevicheOne",
        fontSize: 60,
        color: "#bc4749",
    },
    titleSmall:{
        marginBottom: 30,
        fontFamily: "CevicheOne",
        fontSize: 30,
        color: "#cdbc9e"
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 30
    },
    listePlayer:{
        width: "90%",
        flexDirection: 'row',
        flexWrap: "wrap",
        justifyContent: "space-around",
        alignItems: 'center',
        marginBottom: 50
    }
});