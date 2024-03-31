import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Authstack from './Authstack';
import Homestack from './Homestack';

const Routes = () => {
  console.log("[[[[[[[[[[[[")
  return (
    <NavigationContainer>
{true? Homestack():  Authstack()}
      </NavigationContainer>
  )
}

export default Routes

