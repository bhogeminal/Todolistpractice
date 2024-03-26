import { StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from './style'
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters'
import TextInputwithLabels from '../../components/TextInputwithLabels'
import imagepath from '../../constant/imagepath'
import Buttoncomp from '../../components/Buttoncomp'
import navigationStrings from '../../constant/navigationStrings'
const Login = ({navigation}) => {
  const[isvisible,setisvisible] =useState(true)
  return (
    <View style={styles.container}>
      <View>
      <ImageBackground
        source={require("../../assets/todo.jpg")} 
        style={styles.imgstyle} />

      <View style={styles.mainstyle}>
        <TextInputwithLabels label="Email Address"
          placeholder="Enter your mail"
          inputstyle={{marginBottom: moderateVerticalScale(28)}}
          keyboardType='email-address'

          />
        <TextInputwithLabels label="Password"
          placeholder="Enter your password"
        secureTextEntry={isvisible}
        rightIcon={isvisible?imagepath.HideEye:imagepath.Eye}
        onPressRight={()=>setisvisible(!isvisible)}
      />
      <TouchableOpacity activeOpacity={0.7} 
      style={styles.forgotview} onPress={()=>navigation.navigate(navigationStrings.FORGOTPASSWORD)}>
        <Text style={styles.forgotText}>Forgot Password ? </Text>
      </TouchableOpacity>
      <Buttoncomp btnText={"Login"}/>
</View>
</View>
      <View style={styles.bottomview}>
        <Text>Not a member ?</Text>
        <TouchableOpacity onPress={()=>navigation.navigate(navigationStrings.REGISTER)}>
      <Text>Join Now.</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Login

