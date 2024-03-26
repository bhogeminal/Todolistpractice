import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import TextInputwithLabels from '../../components/TextInputwithLabels'
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters'
import Buttoncomp from '../../components/Buttoncomp'
import navigationStrings from '../../constant/navigationStrings'
import styles from './style'
import imagepath from '../../constant/imagepath'
const Forgotpassword = ({ navigation }) => {
  const [isTrue, setisTrue] = useState(true)
  const[isvisible,setisvisible] =useState(true)

  return (
    <SafeAreaView style={{ flex: 1}}>
      <View style={styles.container}>
        <View style={{flex:0.2,alignItems:"center",justifyContent:"center"}}>
        <Text>Lock Icon name a name type(argument)</Text>
        </View>
        <View style={{flex:0.4}}>
          <Text style={{ fontSize: moderateScale(20), fontWeight: "bold", marginBottom: moderateScale(20) }}>Forgot Password</Text>
          <Text style={{ fontSize: moderateScale(14), fontWeight: "600", marginBottom: moderateScale(20) }}>Enter Email Address </Text>
          </View>
          <View style={{flex:0.4}}>
          <TextInputwithLabels label="Email Address"
          placeholder="Enter your mail"
          inputstyle={{marginBottom: moderateVerticalScale(28)}}
          keyboardType='email-address'

          />
          <Buttoncomp btnText={"SEND"}
            onPress={() => navigation.navigate(navigationStrings.HOME)}
          btnstyle={{marginTop:moderateVerticalScale(40)}}
          />
          </View>
      </View>
    </SafeAreaView>
  )
}

export default Forgotpassword