import { StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import styles from './style'
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters'
import TextInputwithLabels from '../../components/TextInputwithLabels'
import imagepath from '../../constant/imagepath'
import Buttoncomp from '../../components/Buttoncomp'
import navigationStrings from '../../constant/navigationStrings'
import colors from '../../styles/colors'
const Login = ({navigation}) => {
  const[isvisible,setisvisible] =useState(true)
  const[inputField,setinputField] =useState({
    username:'',
    password:''
  })
  const[error,seterror]=useState({});
  const validate=()=>{

  }
  const handlesubmit=()=>{
    if(validate()){
      let ob={}
      if(!inputField.username){
        ob.username="Username is required"
        ob.password="Password is required"
        seterror(ob)
        return Object.keys(ob).length===0;
      }
      Alert.alert("your name",JSON.stringify(inputField))
    }
    
  }
  const changeHandler=(value,field)=>{
console.log("value",value);
setinputField({...inputField,[field]:value})
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
          inputstyle={{marginBottom: moderateVerticalScale(28)}}
          keyboardType='email-address'
          value={inputField?.username}
          onchangeText={(val)=>changeHandler(val,'username')}
          />
          {error.username?(<Text style={{color:colors.themecolor}}>{error.username}</Text>):null}
        <TextInputwithLabels label="Password"
          placeholder="Enter your password"
        secureTextEntry={isvisible}
        rightIcon={isvisible?imagepath.HideEye:imagepath.Eye}
        onPressRight={()=>setisvisible(!isvisible)}
       
      />
                {error.password?(<Text style={{color:colors.themecolor}}>{error.password}</Text>):null}

      <TouchableOpacity activeOpacity={0.7} 
      style={styles.forgotview} onPress={()=>navigation.navigate(navigationStrings.FORGOTPASSWORD)}>
        <Text style={styles.forgotText}>Forgot Password ? </Text>
      </TouchableOpacity>
      <Buttoncomp btnText={"Login"} onPress={handlesubmit}/>
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

