import { StyleSheet } from "react-native";
import { fontStyles } from "../utils/Fonts";
import { verticalScale, moderateScale } from "../utils/scaling";
import colors from "../utils/Colors";

export const LoginScreenStyle = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.white,
    },
    inputContainer: {
      marginBottom:verticalScale(16),
      marginTop:verticalScale(32)
    },
    loginContainer: {
      padding: 30,
      flex:1,
      marginTop:verticalScale(123),
      paddingTop:0
    },
    bottomContainer:{flexDirection:"row",justifyContent:"center",alignItems:"center",marginBottom:verticalScale(10)},
    bottomTxt:{fontSize:moderateScale(18),fontFamily:fontStyles.fontFamily },
    btn:{backgroundColor:colors.inputgraybg,marginBottom:verticalScale(13)},
    btntxt:{color :colors.black},
    btnContainer:{ marginTop: verticalScale(71) },
    containerTxt:{marginTop:verticalScale(16)}
   
  });