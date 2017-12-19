import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';

const HomeScreen = ({ navigation }) => (
    <View>
        <Text style={styles.baseText}>Karolis Petrauskas</Text>
        
        <View>
        
            <Image
          style={{width: 200, height: 200}}
          source={{uri: 'https://smhttp-ssl-33667.nexcesscdn.net/manual/wp-content/uploads/2016/02/oval-face-shape-1.jpg'}}
        />
            
        </View>

        <View style={{ flex: 0, alignItems: 'center', justifyContent: 'flex-start' }}>
            <Button
                onPress={() => navigation.navigate('Details')}
                title="Go to details"
                />
        </View>
        
        
    </View>
);

componentDidMount() {
 
   return fetch('')
     .then((response) => response.json())
     .then((responseJson) => {
       let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
       this.setState({
         isLoading: false,
         dataSource: ds.cloneWithRows(responseJson),
       }, function() {
         // In this block you can do something with new state.
       });
     })
     .catch((error) => {
       console.error(error);
     });
 }

const DetailsScreen = () => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
    </View>
);

const RootNavigator = StackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            headerTitle: 'Pradinis langas',
        },
    },
    Details: {
        screen: DetailsScreen,
        navigationOptions: {
            headerTitle: 'Darbai',
        },
    },
});

const styles = StyleSheet.create({
    baseText: {
        fontFamily: 'Cochin',
        fontSize: 40,
        textAlign: 'center',
        
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default RootNavigator;