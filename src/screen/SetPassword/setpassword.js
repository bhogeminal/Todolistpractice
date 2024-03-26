import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import TextInputwithLabels from '../../components/TextInputwithLabels'
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters'
import Buttoncomp from '../../components/Buttoncomp'
import navigationStrings from '../../constant/navigationStrings'
import styles from './style'
import imagepath from '../../constant/imagepath'
const Setpassword = ({ navigation }) => {
  const [isTrue, setisTrue] = useState(true)
  const[isvisible,setisvisible] =useState(true)

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
          <Text style={{ fontSize: moderateScale(20), fontWeight: "bold", marginBottom: moderateScale(20) }}>Set Password</Text>
            <TextInputwithLabels
              label="Password"
              placeholder="Please Enter password"
              secureTextEntry={isvisible}
              rightIcon={isvisible?imagepath.HideEye:imagepath.Eye}
              onPressRight={()=>setisvisible(!isvisible)}
            />
          <Buttoncomp btnText={"Continue"}
            onPress={() => navigation.navigate(navigationStrings.HOME)}
            btnstyle={styles.btnstyle}
            img={imagepath.right}
          />
      </View>
    </SafeAreaView>
  )
}

export default Setpassword