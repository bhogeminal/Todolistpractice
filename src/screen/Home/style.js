
  import { StyleSheet } from "react-native";
import { scale, verticalScale, moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import colors from "../../styles/colors";

const styles = StyleSheet.create({
    maincontain: {
        backgroundColor: colors.blue, borderRadius: moderateScale(6), justifyContent: "space-between",
        paddingHorizontal: scale(6), paddingVertical: scale(12), marginBottom: 12, flexDirection: "row", paddingHorizontal: scale(10)
        , shadowColor: colors.white, shadowOpacity: 0.8,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8, elevation: 10
      },
titleview:   { color: colors.white, fontSize: moderateScale(20), fontWeight: "800" },
imageview:{ width: moderateScale(20), height: moderateScale(20), alignSelf: "center", marginHorizontal: 10 },
deleteview:{ width: moderateScale(20), height: moderateScale(20), alignSelf: "center" },
homecontain:{ marginHorizontal: scale(15), marginTop: moderateVerticalScale(10) },
inputview:{
    borderWidth: 2, borderColor: colors.blue, borderRadius: moderateScale(10),
    paddingVertical: 12, paddingHorizontal: 16,
  },
  btntext:{ backgroundColor: colors.black, borderRadius: 6, paddingVertical: 12, marginVertical: 24, alignItems: "center" },
btnupdate:  { color: "#fff", fontWeight: "bold", fontSize: 20 },
addview:{ backgroundColor: colors.black, borderRadius: 6, paddingVertical: 12, marginVertical: 24, alignItems: "center" },
addtodotext:{ color: "#fff", fontWeight: "bold", fontSize: 20 },

});

export default styles