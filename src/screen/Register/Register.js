import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import TextInputwithLabels from '../../components/TextInputwithLabels'
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters'
import Buttoncomp from '../../components/Buttoncomp'
import navigationStrings from '../../constant/navigationStrings'
import styles from './style'
import imagepath from '../../constant/imagepath'
import colors from '../../styles/colors'
const Register = ({ navigation }) => {
  const [isTrue, setisTrue] = useState(true)
  const [inputField, setinputField] = useState({
    username: "",
    Password: "",
    DateBirth: "",
    Phone: "",
    Email: "",
    Password: "",
    Country: ""
  })
  const [error, seterror] = useState({})
  const validate = () => {
    let ob = {}
    if (!inputField.username) {
      ob.username = "username is required"
    }
    if (!inputField.lastname) {
      ob.Password = "lastname is req"
    }
    if (!inputField.DateBirth) {
      ob.Password = "Date of Birth is req"
    }
    if (!inputField.Phone) {
      ob.Password = "Phone is req"
    }
    if (!inputField.Email) {
      ob.Password = "Email is req"
    }
    if (!inputField.Password) {
      ob.Password = "password is req"
    }
    if (!inputField.Country) {
      ob.Password = "Country is req"
    }
    if (!inputField.postalcode) {
      ob.Password = "postalcode is req"
    }
    if (!inputField.Address) {
      ob.Password = "Address is req"
    }
    seterror(ob)
    return Object.keys(ob).length === 0
  }

  const handleregister = () => {
    if (validate()) {
      navigation.navigate(navigationStrings.SETPASSWORD, { screen: navigationStrings.SETPASSWORD })
    }
  }
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
          {error.username ? <Text style={{ color: colors.red }}>{error.username}</Text> : null}
          {error.lastname ? <Text style={{ color: colors.red }}>{error.lastname}</Text> : null}

          <TextInputwithLabels
            label=" Name"
            placeholder="Last Name"
            inputstyle={{ marginVertical: moderateVerticalScale(20) }}
          />

          <TextInputwithLabels
            label="Date of Birth"
            placeholder=" please enter Date of Birth"
            keyboardType="numeric"

          />
          <TextInputwithLabels
            label="Phone Number"
            placeholder=" please enter Phone Number"
            inputstyle={{ marginVertical: moderateVerticalScale(20) }}
          />
          <TextInputwithLabels
            label="Email"
            placeholder=" please enter Email"
            keyboardType='email-address'
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
          <TouchableOpacity style={styles.checkimg}
            activeOpacity={0.8} onPress={() => setisTrue(!isTrue)}
          >
            <Image source={isTrue ? imagepath.check : imagepath.uncheck}

              style={styles.imgstyle} />
            <Text style={{ color: "black" }}>By Logging in,you agree to Terms and Condition,Privacy Policy</Text>
          </TouchableOpacity>

          <Buttoncomp btnText={"Continue"}
            onPress={handleregister}
            btnstyle={{ marginVertical: moderateVerticalScale(32) }}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default Register
