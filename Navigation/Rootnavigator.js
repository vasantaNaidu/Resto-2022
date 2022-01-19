import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Authnavigator from './Authnavigator'

const Rootnavigator =()=>
{
    return(
        <NavigationContainer>
            <Authnavigator/>
        </NavigationContainer>
    )   
};

export default Rootnavigator