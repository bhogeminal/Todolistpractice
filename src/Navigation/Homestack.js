import React from "react";
import { View, Text } from "react-native";
import { Forgotpassword, Home, Login, Register } from "..";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import navigationStrings from "../constant/navigationStrings";
import TabRoutes from "./TabRoutes";
const Stack = createNativeStackNavigator();


const Homestack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={navigationStrings.Tabroute} component={TabRoutes} />
    

    </Stack.Navigator>
  )
}

export default Homestack


