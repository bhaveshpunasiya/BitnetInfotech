import { StyleSheet } from "react-native";
import { fontStyles } from "../utils/Fonts";
import { verticalScale, moderateScale, horizontalScale } from "../utils/scaling";
import colors from "../utils/Colors";

export const AboutYourSelfStyle = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:colors.inputgraybg
    },
    loginContainer: {
      padding: 30,
      flex:1,
      paddingTop:verticalScale(123),
      backgroundColor: colors.white,
    },
    headeTxt:{
      fontSize:moderateScale(24)
    },
    genderContainer:{ flexDirection: "row", justifyContent: "space-between", marginTop: verticalScale(22) },
    
    containerTxt:{marginTop:verticalScale(49)},
    buttonStyleOne:{ width: "45%" },
    buttonStyleTwo:{ width: "45%", backgroundColor: colors.inputgraybg },
    textStyle:{ color: colors.commantxt ,fontSize:moderateScale(15)},
    textStyleTwo:{ fontSize:moderateScale(15)},
    finsihBtn:{marginHorizontal:horizontalScale(24),marginVertical:verticalScale(14)},
    primaryTextStyle:{fontSize:moderateScale(16)}
   
  });