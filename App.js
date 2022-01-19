import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Login from './Screen/Login'
import Signup from './Screen/Signup'
import WelcomeScreen from './Screen/WelcomeScreen'


const Main = createNativeStackNavigator();

const App =()=>
 {
  return (
    <NavigationContainer>
      <Main.Navigator screenOptions ={{headerShown: false}}>
        <Main.Screen name='WelcomeScreen' component={WelcomeScreen}/>
        <Main.Screen name='Login' component={Login}/>
        <Main.Screen name='Signup' component={Signup}/>
      </Main.Navigator>
    </NavigationContainer>
  )
};

export default App;