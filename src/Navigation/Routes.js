import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Authstack from './Authstack';

const Routes = () => {
  return (
    <NavigationContainer>
{Authstack()}
      </NavigationContainer>
  )
}

export default Routes

