import { Dimensions, StyleSheet } from 'react-native';

var windowWidth = Dimensions.get('window').width;
windowWidth = windowWidth > 600 ? 600 : windowWidth

export default StyleSheet.create({
    titleLarge:{
        fontFamily: "CevicheOne",
        fontSize: 60,
        color: "#cdbc9e"
    },
    titleSmall:{
        marginBottom: 30,
        fontFamily: "CevicheOne",
        fontSize: 30,
        color: "#cdbc9e"
    },
    textInput:{
        color: '#000',
        backgroundColor: '#fff',
        width: '100%',
        maxWidth: 400,
        marginBottom: 20,
        height: 50,
        lineHeight: 25,
        borderRadius: 15,
        borderWidth: 0,
        fontSize: 20,
        textAlign:'center'
    },
    listItemContainer: {
        justifyContent: "space-between",
        alignItems: 'center',
        width: '80%',
        marginTop: 10,
        marginBottom: 10
    },
    listItem: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        width: '100%',
        marginTop: 10,
        marginBottom: 10
    },
    name: {
        fontFamily: "CevicheOne",
        color: "#cdbc9e",
        fontSize: 40
    },
    trashContainer: {
        width: 50,
        height: 50,
    },
    trash: {
        width: 50,
        height: 50,
    }
});