import React, { Component } from 'react';
import { Text, Alert, AppRegistry, Button, StyleSheet, View, Image, ScrollView } from 'react-native';

export default class pirmasdarbas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            titleText: "Tomas-Tosas",
            bodyText: 'Tik nepyk uz tai :D'
        };
    }
    _onPressButton() {            
        Alert.alert('Jau gali eit atgal')
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <ScrollView contentContainerStyle={styles.contentContainer}>
                    <Button
                        onPress={this._onPressButton}
                        title="Paspausk!"
                        color="#841584"
                        />
                    <View style={{height: 700, backgroundColor: 'powderblue'}} />
                    <View>
                        <Text style={styles.baseText}>
                            <Text style={styles.titleText}>
                                {this.state.titleText}{'\n'}{'\n'}
                            </Text>
                            <Text numberOfLines={5}>
                                {this.state.bodyText}
                            </Text>
                            <Image source={require('./niekas.jpg')}/>
                        </Text>
                    </View>
                </ScrollView>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    baseText: {
        fontSize: 30,
        fontFamily: 'Cochin',
    },
    titleText: {
        fontSize: 50,
        fontWeight: 'bold',
    },
    contentContainer: {
        paddingVertical: 20
    },
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    buttonContainer: {
        margin: 20
    },
    alternativeLayoutButtonContainer: {
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});

// skip this line if using Create React Native App
AppRegistry.registerComponent('pirmasdarbas', () => pirmasdarbas);
