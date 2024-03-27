import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Profile from '../screen/Profile/Profile';
import Home from '../screen/Home/Home'
import navigationStrings from '../constant/navigationStrings';
import { Image } from 'react-native';
import imagepath from '../constant/imagepath';
import colors from '../styles/colors';
import { moderateScale } from 'react-native-size-matters';
const BottomTab = createBottomTabNavigator();


function TabRoutes() {
  return (
    <BottomTab.Navigator screenOptions={{headerShown:false,tabBarInactiveTintColor:colors.black,tabBarActiveTintColor:colors.themecolor}}>
      <BottomTab.Screen name={navigationStrings.HOME} component={Home} 
      options={{tabBarIcon:({f})=>{
        return(
            <Image source={imagepath.Home} 
            
            style={{tintColor:f?colors.themecolor:colors.black,height:moderateScale(20),width:moderateScale(20)}}/>
        )
      }}}
      />
      <BottomTab.Screen name={navigationStrings.PROFILE} component={Profile}
       options={{tabBarIcon:({f})=>{
        return(
            <Image source={imagepath.Profile} 
            
            style={{tintColor:f?colors.themecolor:colors.black,height:moderateScale(20),width:moderateScale(20)}}/>
        )
      }}}
      />

    </BottomTab.Navigator>
  );
}
export default TabRoutes