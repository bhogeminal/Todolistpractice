import React from "react";
import { View,Text } from "react-native";
import { Home, Login ,Register} from "..";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import navigationStrings from "../constant/navigationStrings";

const Stack = createNativeStackNavigator();


const Mainstack = () => {
  return (
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name={navigationStrings.HOME} component={Home} />

      </Stack.Navigator>
  )
}

export default Mainstack


