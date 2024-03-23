import React from "react";
import { View,Text } from "react-native";
import { Login ,Register} from "..";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import navigationStrings from "../constant/navigationStrings";

const Stack = createNativeStackNavigator();


const Authstack = () => {
  return (
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name={navigationStrings.LOGIN} component={Login} />
        <Stack.Screen name={navigationStrings.REGISTER} component={Register} />

      </Stack.Navigator>
  )
}

export default Authstack


