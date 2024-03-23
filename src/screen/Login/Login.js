import { StyleSheet, Text, View, ImageBackground, TextInput } from 'react-native'
import React from 'react'
import styles from './style'
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters'
import TextInputwithLabels from '../../components/TextInputwithLabels'
const Login = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/todo.jpg")} style={styles.imgstyle} />

      <View style={styles.mainstyle}>
        <TextInputwithLabels label="Email Address"
          placeholder="Enter your mail" />
        <TextInputwithLabels label="Password"
          placeholder="Enter your password"
           inputstyle={{marginBottom: moderateVerticalScale(28),backgroundColor:"red"}}
           keyboardType='email-address'

      />
      </View>
    </View>
  )
}

export default Login

