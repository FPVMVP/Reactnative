import React, { Component } from 'react';
import {
    StyleSheet,
    TouchableHighlight,
    Text,
    View,
    Image
} from 'react-native';

import styles from './styles';

class ScreenTwo extends Component {

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text style={styles.baseText}>Viasat Lietuva</Text>
                <Text style={styles.titleText}>Pardavimu vadybininkas nuo 2016/06/08</Text>
                <Text style={styles.baseText}>Fanierke</Text>
                <Text style={styles.titleText}>Visu galu meistras 2014/2015</Text>
            </View>
        );
    }
}

export default ScreenTwo;