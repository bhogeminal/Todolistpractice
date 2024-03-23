import React from "react";
import { View,Text } from "react-native";
import { Login ,Register} from "..";
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();


const Authstack = () => {
  return (
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />

      </Stack.Navigator>
  )
}

export default Authstack


