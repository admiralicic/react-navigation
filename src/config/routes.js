import React from 'react';
import { createStackNavigator, createDrawerNavigator, createBottomTabNavigator } from 'react-navigation';

import { MainScreen, ModalScreen, PlayScreen } from '../screens/';


const MainNavigator = createStackNavigator({
  Main: {screen: MainScreen}
});

const PlayNavigator = createStackNavigator({
  Play: PlayScreen
});

const TabsNavigator = createBottomTabNavigator({
  Test: MainNavigator,
  Play: PlayNavigator
});

const AppStackNavigator = createStackNavigator({
  AppTabNavigator : {screen: TabsNavigator}
},
{headerMode: 'none'});

const AppDrawerNavigator = createDrawerNavigator({
  Home: AppStackNavigator
})



export default Root = createStackNavigator({
  Main: { screen: AppDrawerNavigator },
  Modal: {screen: ModalScreen}
},
{mode: 'modal',
headerMode: 'none'});