import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import TextInputwithLabels from '../../components/TextInputwithLabels'
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters'
import Buttoncomp from '../../components/Buttoncomp'
import navigationStrings from '../../constant/navigationStrings'
import styles from './style'
import imagepath from '../../constant/imagepath'
const Register = ({ navigation }) => {
  const [isTrue, setisTrue] = useState(true)
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={{ fontSize: moderateScale(20), fontWeight: "bold", marginBottom: moderateScale(20) }}>Register</Text>
          <View style={{ flexDirection: "row" }}>
            <TextInputwithLabels
              label="First Name"
              placeholder="Please Enter your First Name"
              inputstyle={{ flex: 1 }}
              multiline={true}
            />
            <View style={{ marginHorizontal: moderateScale(8) }}></View>
            <TextInputwithLabels
              label="Last Name"
              placeholder="Last Name"
              inputstyle={{ flex: 1 }}

            />

          </View>
          <TextInputwithLabels
            label=" Name"
            placeholder="Last Name"
            inputstyle={{ marginVertical: moderateVerticalScale(20) }}
          />
          <TextInputwithLabels
            label="Date of Birth"
            placeholder=" please enter Date of Birth"
          />
          <TextInputwithLabels
            label="Phone Number"
            placeholder=" please enter Phone Number"
            inputstyle={{ marginVertical: moderateVerticalScale(20) }}

          />
          <TextInputwithLabels
            label="Email"
            placeholder=" please enter Email"

          />
          <View style={{ flexDirection: "row" }}>
            <TextInputwithLabels
              label="Country"
              placeholder="Please Enter your country Name"
              inputstyle={{ flex: 1, marginVertical: moderateVerticalScale(20) }}
              multiline={true}
            />
            <View style={{ marginHorizontal: moderateScale(8) }}></View>
            <TextInputwithLabels
              label="Postal code"
              placeholder="Postal code"
              inputstyle={{ flex: 1, marginVertical: moderateVerticalScale(20) }}

            />

          </View>
          <TextInputwithLabels
            label="Address"
            placeholder="please enter address"

          />
          <TextInputwithLabels
            label="Referral code"
            placeholder="please enter code"
            inputstyle={{ marginVertical: moderateVerticalScale(20) }}

          />
          <TouchableOpacity style={{ marginBottom: moderateVerticalScale(28), flexDirection: "row", alignItems: "center" }}
            activeOpacity={0.8} onPress={() => setisTrue(!isTrue)}
          >
            <Image source={isTrue ? imagepath.check : imagepath.uncheck}

              style={styles.imgstyle} />
            <Text style={{ color: "black" }}>By Logging in,you agree to Terms and Condition,Privacy Policy</Text>
          </TouchableOpacity>

          <Buttoncomp btnText={"Continue"}
            onPress={() => navigation.navigate(navigationStrings.HOME)}
            btnstyle={{ marginVertical: moderateVerticalScale(32) }}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default Register