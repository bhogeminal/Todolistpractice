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
import { saveUserDataToStorage,getUserDataFromStorage } from '../../../storage/storage'
const Register = ({ navigation }) => {
  const [isTrue, setisTrue] = useState(true)
  const [inputField, setinputField] = useState({
    username: "",
    lastname: "",
    Password: "",
    DateBirth: "",
    Phone: "",
    Email: "",
    postalcode: "",
    Country: "",
    Address: "",
    Referral:""
  })
  const [error, seterror] = useState({})

  const validate = () => {
    let ob = {}
    if (!inputField.username) ob.username = "Username is required"
    if (!inputField.lastname) ob.lastname = "Last name is required"
    if (!inputField.DateBirth) ob.DateBirth = "Date of Birth is required"
    if (!inputField.Phone) ob.Phone = "Phone number is required"
    if (!inputField.Email) ob.Email = "Email is required"
    if (!inputField.Country) ob.Country = "Country is required"
    if (!inputField.postalcode) ob.postalcode = "Postal code is required"
    if (!inputField.Address) ob.Address = "Address is required"
    if (!inputField.Referral) ob.Referral = "Referral is required"
    console.log("Validation errors:", ob);

    seterror(ob)
    return Object.keys(ob).length === 0
  }

  const handleregister = () => {
    console.log("Register button pressed");
    if (validate()) {
      navigation.navigate(navigationStrings.SETPASSWORD)
      saveUserDataToStorage(inputField)
    }
    else{
      console.log("asa")
    }
  }

  const changeHandler = (value, field) => {
    console.log("value", value);
    setinputField({ ...inputField, [field]: value })
    seterror({ ...error, [field]: "" })
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={{ fontSize: moderateScale(20), fontWeight: "bold", marginBottom: moderateScale(20) }}>Register</Text>
          <View style={{ flexDirection: "row" }}>
            <TextInputwithLabels
              label="First Name"
              placeholder="First Name"
              inputstyle={{ flex: 1 }}
              multiline={true}
              value={inputField?.username}
              onchangeText={(val) => changeHandler(val, 'username')}

            />
            <View style={{ marginHorizontal: moderateScale(8) }}></View>
            <TextInputwithLabels
              label="Last Name"
              placeholder="Last Name"
              inputstyle={{ flex: 1 }}
              value={inputField?.lastname}
              onchangeText={(val) => changeHandler(val, 'lastname')}
            />
          </View>
          <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
            <Text style={{ color: colors.red }}>{error.username}</Text>
            <Text style={{ color: colors.red }}>{error.lastname}</Text>
          </View>
          <TextInputwithLabels
            label="Date of Birth"
            placeholder="Enter Date of Birth"
            keyboardType="numeric"
            value={inputField?.DateBirth}
            onchangeText={(val) => changeHandler(val, 'DateBirth')}
          />
          <Text style={{ color: colors.red }}>{error.DateBirth}</Text>

          <TextInputwithLabels
            label="Phone Number"
            placeholder="Enter Phone Number"
            value={inputField?.Phone}
            inputstyle={{ marginVertical: moderateVerticalScale(20) }}
            onchangeText={(val) => changeHandler(val, 'Phone')}
          />
          <Text style={{ color: colors.red }}>{error.Phone}</Text>

          <TextInputwithLabels
            label="Email"
            placeholder="Enter Email"
            keyboardType='email-address'
            value={inputField?.Email}
            onchangeText={(val) => changeHandler(val, 'Email')}
          />
          <Text style={{ color: colors.red }}>{error.Email}</Text>

          <View style={{ flexDirection: "row" }}>
            <TextInputwithLabels
              label="Country"
              placeholder="Country Name"
              inputstyle={{ flex: 1, marginVertical: moderateVerticalScale(20) }}
              multiline={true}
              value={inputField?.Country}
              onchangeText={(val) => changeHandler(val, 'Country')}
            />
            <TextInputwithLabels
              label="Postal code"
              placeholder="Postal code"
              value={inputField?.postalcode}
              inputstyle={{ flex: 1, marginVertical: moderateVerticalScale(20) }}
              onchangeText={(val) => changeHandler(val, 'postalcode')}
            />
          </View>
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>

            <Text style={{ color: colors.red }}>{error.Country}</Text>

            <Text style={{ color: colors.red }}>{error.postalcode}</Text>
          </View>
          <TextInputwithLabels
            label="Address"
            placeholder="Enter Address"
            value={inputField?.Address}
            inputstyle={{ marginVertical: moderateVerticalScale(20) }}
            onchangeText={(val) => changeHandler(val, 'Address')}
          />
          {error.Address?<Text style={{ color: colors.red }}>{error.Address}</Text>:null}

          <TextInputwithLabels
            label="Referral code"
            placeholder="Enter Referral code"
            value={inputField?.Referral}
            inputstyle={{ marginVertical: moderateVerticalScale(20) }}
            onchangeText={(val) => changeHandler(val, 'Referral')}
          />
          {error.Referral?<Text style={{ color: colors.red }}>{error.Referral}</Text>:null}

          <TouchableOpacity style={styles.checkimg}
            activeOpacity={0.8} onPress={() => setisTrue(!isTrue)}
          >
            <Image source={isTrue ? imagepath.uncheck : imagepath.check}
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
