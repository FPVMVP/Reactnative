import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
    Image
} from 'react-native';

import styles from './styles';

class ScreenOne extends Component {

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text style={styles.baseText}>Karolis Petrauskas</Text>
                <View style={styles.container}>
                    <Image
                        style={styles.imagetext}
                        source={{uri: 'https://smhttp-ssl-33667.nexcesscdn.net/manual/wp-content/uploads/2016/02/oval-face-shape-1.jpg'}}
                        />
                </View>
            </View>
        );
    }
}

export default ScreenOne;