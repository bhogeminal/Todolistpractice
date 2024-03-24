import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import TextInputwithLabels from '../../components/TextInputwithLabels'
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters'
import Buttoncomp from '../../components/Buttoncomp'
import navigationStrings from '../../constant/navigationStrings'
import styles from './style'
const Register = ({navigation}) => {
  return (
    <SafeAreaView style={{flex:1}}>
    <View style={styles.container}>
      <Text>Register</Text>
      <View style={{flexDirection:"row"}}>
      <TextInputwithLabels 
      label="First Name"
      placeholder="Please Enter your First Name"
      inputstyle={{flex:1}}

      />
      <View style={{marginHorizontal:moderateScale(8)}}></View>
      <TextInputwithLabels 
      label="Last Name"
      placeholder="Last Name"
      inputstyle={{flex:1}}

      />
      </View>
     
      <Buttoncomp btnText={"Continue"}
      onPress={()=>navigation.navigate(navigationStrings.HOME)}
      />
    </View>
    </SafeAreaView>
  )
}

export default Register

