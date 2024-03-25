import React from "react";
import { View, Text } from "react-native";
import { Forgotpassword, Home, Login, Register } from "..";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import navigationStrings from "../constant/navigationStrings";
import setpassword from "../screen/SetPassword/setpassword";

const Stack = createNativeStackNavigator();


const Authstack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={navigationStrings.LOGIN} component={Login} />
      <Stack.Screen name={navigationStrings.REGISTER} component={Register} />
      <Stack.Screen name={navigationStrings.HOME} component={Home} />
      <Stack.Screen name={navigationStrings.SETPASSWORD} component={setpassword} />
      {/* <Stack.Screen name={navigationStrings.CHOOSEACCOUNT} component={ChooseAccount} /> */}
      <Stack.Screen name={navigationStrings.FORGOTPASSWORD} component={Forgotpassword} />

    </Stack.Navigator>
  )
}

export default Authstack


