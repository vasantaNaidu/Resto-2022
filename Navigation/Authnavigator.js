import React from 'react'
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack'
import Login from '../Screen/Login'
import Signup from '../Screen/Signup'
import WelcomeScreen from '../Screen/WelcomeScreen'
import { Home } from '../Screen/Home'
import ClientTabs from './Clienttabs';

const Main = createStackNavigator();

const Authnavigator =()=>
 {
  return (

      <Main.Navigator screenOptions={{headerShown: false}}>
        <Main.Screen name='WelcomeScreen' component={WelcomeScreen} options={TransitionPresets.RevealFromBottomAndroid}/>
        <Main.Screen name='Login' component={Login} options={TransitionPresets.RevealFromBottomAndroid}/>
        <Main.Screen name='Signup' component={Signup} options={TransitionPresets.RevealFromBottomAndroid}/>
        <Main.Screen name='ClientTabs' component={ClientTabs} options={TransitionPresets.RevealFromBottomAndroid}/>

      </Main.Navigator>
  )
};

export default Authnavigator;