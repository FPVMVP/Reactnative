import React from 'react';
import {
    StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
    icon: {
        width: 26,
        height: 26,
    },
    container: {
        flex: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        alignSelf: 'stretch',
        marginLeft: 50,
        marginRight: 50,
        borderRadius: 5,
        height: 40,
        backgroundColor: '#7567B1',
        justifyContent: 'center'
    },
    buttonText: {
        color: 'white',
        alignSelf: 'center',
        fontSize: 16
    },
    baseText: {
        fontFamily: 'Cochin',
        fontSize: 40,
        textAlign: 'center'

    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    imagetext: {

        width: 400, 
        height: 400
    },
    base2: {
        fontFamily: 'Cochin',
        fontSize: 30,
        textAlign: 'justify'

    },
    title2: {
        fontSize: 15,
        textAlign: 'justify',
        fontWeight: 'bold'
    }
});

export default styles;