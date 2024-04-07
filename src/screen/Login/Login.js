import { StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import styles from './style'
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters'
import TextInputwithLabels from '../../components/TextInputwithLabels'
import imagepath from '../../constant/imagepath'
import Buttoncomp from '../../components/Buttoncomp'
import navigationStrings from '../../constant/navigationStrings'
import colors from '../../styles/colors'

const Login = ({ navigation }) => {
  const [isvisible, setisvisible] = useState(true)
  const [inputField, setinputField] = useState({
    email: '',
    password: ''
  })
  const [error, seterror] = useState({});
  const validate = () => {
    let ob = {}
    if (!inputField.email)
      ob.email = "email is required"
    if (!inputField.password)
      ob.password = "Password is required"
    seterror(ob)
    return Object.keys(ob).length === 0;

  }
  // const handlesubmit = () => {
  //   if (validate()) {
  //     // Alert.alert("your name", JSON.stringify(inputField))
  //     navigation.navigate(navigationStrings.HOMESTACK, { screen: navigationStrings.HOME });
  //   }

  // }
  const handlesubmit = async () => {
    if(validate()){
    
      // User data retrieved successfully, proceed with login
      navigation.navigate(navigationStrings.HOMESTACK,{screen:navigationStrings.HOME})
    } else {
      console.log("No user data found");
    }
  
  };
  const changeHandler = (value, field) => {
    console.log("value", value);
    setinputField({ ...inputField, [field]: value })
    seterror({ ...error, [field]: "" })
  }
  return (
    <View style={styles.container}>
      <View>
        <ImageBackground
          source={require("../../assets/todo.jpg")}
          style={styles.imgstyle} />

        <View style={styles.mainstyle}>
          <TextInputwithLabels label="Email Address"
            placeholder="Enter your mail"
            keyboardType='email-address'
            value={inputField?.email}
            onchangeText={(val) => changeHandler(val, 'email')}
          />
          {error.email ? (<Text style={{ color: colors.red }}>{error.email}</Text>) : null}
          <TextInputwithLabels
            label="Password"
            placeholder="Enter your password"
            secureTextEntry={isvisible}
            inputstyle={{ marginTop: moderateScale(10) }}
            rightIcon={isvisible ? imagepath.HideEye : imagepath.Eye}
            onPressRight={() => setisvisible(!isvisible)}
            value={inputField?.password}
            onchangeText={(val) => changeHandler(val, 'password')}
          />
          {error.password ? (<Text style={{ color: colors.red }}>{error.password}</Text>) : null}
          <TouchableOpacity activeOpacity={0.7}
            style={styles.forgotview} onPress={() => navigation.navigate(navigationStrings.FORGOTPASSWORD)}>
            <Text style={styles.forgotText}>Forgot Password ? </Text>
          </TouchableOpacity>
          <Buttoncomp btnText={"Login"} onPress={handlesubmit} />
        </View>
      </View>
      <View style={styles.bottomview}>
        <Text>Not a member ?</Text>
        <TouchableOpacity onPress={() => navigation.navigate(navigationStrings.REGISTER)}>
          <Text>Join Now.</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Login

