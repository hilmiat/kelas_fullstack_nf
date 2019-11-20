/* eslint-disable prettier/prettier */
/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import DetailScreen from './src/DetailScreen';
import {name as appName} from './app.json';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

const Nav = createStackNavigator(
    {
        home: App,
        detail: DetailScreen,
    },
    {
        defaultNavigationOptions: ({navigation}) => {
            return {
                headerStyle: {backgroundColor: '#FFD248'},
                headerTintColor:'#FFFFFF',
                title: 'Unsplash App',
            };
        },
    }
);

AppRegistry.registerComponent(appName, () => createAppContainer(Nav));
