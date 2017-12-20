import React from 'react';
import { TabNavigator } from 'react-navigation';

import ScreenOne from './ScreenOne';
import ScreenTwo from './ScreenTwo';
import ScreenThree from './ScreenThree';

const App = TabNavigator({
    Pagrindinis: { screen: ScreenOne },
    Patirtis: { screen: ScreenTwo },
    Gebejimai: { screen: ScreenThree }
}, {
    tabBarOptions: { 
        activeTintColor: '#7567B1',
        labelStyle: {
            fontSize: 16,
            fontWeight: '600'
        }
    }
});

export default App;