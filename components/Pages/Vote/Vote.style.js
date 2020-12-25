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
    titleSmall:{
        marginBottom: 30,
        fontFamily: "CevicheOne",
        fontSize: 30,
        color: "#cdbc9e",
        textAlign: 'center'
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 30
    }
});