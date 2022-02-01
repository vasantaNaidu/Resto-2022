import React from 'react'
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack'
import Login from '../Screen/Login'
import Signup from '../Screen/Signup'
import WelcomeScreen from '../Screen/WelcomeScreen'
import ClientTabs from './Clienttabs';
import RestaurantsMapScreen from '../Screen/RestaurantsMapScreen'
import DrawerNavigator from './DrawerNavigator'

const Main = createStackNavigator();

const Authnavigator =()=>
 {
  return (

      <Main.Navigator screenOptions={{headerShown: false}}>
        <Main.Screen name='WelcomeScreen' component={WelcomeScreen} options={TransitionPresets.RevealFromBottomAndroid}/>
        <Main.Screen name='Login' component={Login} options={TransitionPresets.RevealFromBottomAndroid}/>
        <Main.Screen name='Signup' component={Signup} options={TransitionPresets.RevealFromBottomAndroid}/>
        <Main.Screen name='DrawerNavigator' component={DrawerNavigator} options={TransitionPresets.RevealFromBottomAndroid}/>
        <Main.Screen name='RestaurantsMapScreen' component={RestaurantsMapScreen} options={TransitionPresets.RevealFromBottomAndroid}/>
      </Main.Navigator>
  )
};

export default Authnavigator;