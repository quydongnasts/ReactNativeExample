/*global alert, confirm, console, Debug, opera, prompt, WSH */

import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import {

} from 'react-native';

import HomeScreen from './components/home';
import AboutScreen from './components/about';
import DetailScreen from './components/details';

const MainScreenNavigator = TabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor }) => (
          <Icon name='home' type='font-awesome' color={tintColor} />
        ),
      }
  },

  AboutScreen: {
    screen: AboutScreen,
    navigationOptions: {
      tabBarLabel: 'About',
      tabBarIcon: ({ tintColor }) => (
        <Icon
          name='heartbeat'
          type='font-awesome'
          color={tintColor}
        />
      ),
    },
  },


},
{
  swipeEnabled: true,
  initialRouteName: 'AboutScreen',
  tabBarPosition: 'bottom',
  tabBarOptions: {
    activeTintColor: 'red',
    // inactiveTintColor: 'blue',
    showIcon: true,
    // showLabel: false,
    scrollEnabled: false,
    indicatorStyle: {
      backgroundColor: 'red'
    },
    style: {
      backgroundColor: 'black'
    }
  }
}
);

const MyStackNavigator = StackNavigator({
  Home: { screen: MainScreenNavigator,
    navigationOptions: {
      header: null,
    }
   },
  DetailScreen: { screen: DetailScreen,
   },
});

export default MyStackNavigator;
