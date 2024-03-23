import { StyleSheet } from "react-native";
import { Scale,verticalScale,moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters'
import colors from "../../styles/colors";

const styles = StyleSheet.create({

    container:{
  flex:1,
  justifyContent:"space-between"
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
    paddingTop:moderateVerticalScale(44)
  },
  forgotview:{alignSelf:"flex-end",marginVertical:moderateVerticalScale(24)},

  forgotText:{
fontSize:scale(16),
color:colors.themecolor,
fontWeight:"400"
  },
  bottomview:{flexDirection:"row",alignItems:"center",justifyContent:"center",marginBottom:moderateScale(44),
  marginTop:moderateVerticalScale(72)}
  })
  export default styles