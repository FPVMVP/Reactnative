import React, { Component } from 'react';
import {
    StyleSheet,
    TouchableHighlight,
    Text,
    View,
    Image
} from 'react-native';

import styles from './styles';

class ScreenThree extends Component {

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text style={styles.base2}>Gebejimai:</Text>
                <Text style={styles.title2}>Groju gitara, nervais, gal pora natu pianinu, bosu, kontrabosu, bugnais pora beatu</Text>
                <Text style={styles.base2}>Kalbos:</Text>
                <Text style={styles.title2}>Anglu k, B2 lygiu</Text>
                <Text style={styles.title2}>Lietuviu k, ciut egzamina praejau</Text>
            </View>
        );
    }
}

export default ScreenThree;