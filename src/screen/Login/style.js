import { StyleSheet } from "react-native";
import { Scale,verticalScale,moderateScale, moderateVerticalScale } from 'react-native-size-matters'

const styles = StyleSheet.create({

    container:{
  flex:1,
    },
    imgstyle:{
      height:moderateScale(200),
      width:"100%"
    },
    inputstyle:{borderBottomWidth:1,borderBottomColor:'rgba(0,0,0,1)',
    borderRadius:moderateScale(4)
  
  },
  mainstyle:{
    paddingHorizontal:moderateScale(24),
    paddingVertical:moderateVerticalScale(44)
  }
  })
  export default styles