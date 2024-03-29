import React from "react";
import { View,Text } from "react-native";
import { Home, Login ,Register} from "..";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import navigationStrings from "../constant/navigationStrings";
import setpassword from "../screen/SetPassword/Setpassword";
import TabRoutes from "./TabRoutes";

const Stack = createNativeStackNavigator();


const Mainstack = () => {
  return (
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name={navigationStrings.TabRoutes} component={TabRoutes} />

      </Stack.Navigator>
  )
}

export default Mainstack


