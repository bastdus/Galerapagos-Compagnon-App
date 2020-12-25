import AsyncStorage from "@react-native-community/async-storage";

export const getLocalStorage  = async () => {
    try{
        const value = await AsyncStorage.getItem('galerapagos_game');

        if (value !== null) {
            return value
        }
    }catch(error){
        console.error(error);
    }
};

export const setLocalStorage = async (value) => {
    try{
        await AsyncStorage.setItem('galerapagos_game', JSON.stringify(value));
        return
    }catch(error){
        console.error(error);
        return
    }
};

export const removeLocalStorage = async () => {
    try{
        await AsyncStorage.removeItem('galerapagos_game')
        return
    }catch(error) {
        console.error(error);
        return
    }
}

export const shuffle = (a) => {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}