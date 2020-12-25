import { Dimensions, StyleSheet } from 'react-native';


const windowWidth = Dimensions.get('window').width;
const width = windowWidth > 1024 ? 1024 : windowWidth
const ratio = windowWidth/1024; //512 is actual image width
const height = 739 * ratio; //1965 is actual height of image

export default StyleSheet.create({
    titleLarge:{
        fontFamily: "CevicheOne",
        fontSize: 60,
        color: "#cdbc9e",
        textAlign: 'center'
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: windowWidth,
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        width: width,
        height: height,
        position: 'absolute',
        top: (Dimensions.get('window').height-height)/2
    },
    imageSmall: {
        resizeMode: "cover",
        justifyContent: "center",
        height: 200,
        width: (200/739)*1024,
        margin: 20
    },
    listeImage:{
        width: width,
        flexDirection: 'row',
        flexWrap: "wrap",
        justifyContent: "space-around",
        alignItems: 'center',
        marginBottom: 50
    },
    listItemContainer: {
        justifyContent: "space-between",
        alignItems: 'center',
        width: width,
        marginTop: 10,
        marginBottom: 10
    },
    listItem: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        width: '80%',
        height: 40,
        marginTop: 10,
        marginBottom: 10,
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