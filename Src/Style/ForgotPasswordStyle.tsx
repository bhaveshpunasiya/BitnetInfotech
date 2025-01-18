import { StyleSheet } from "react-native";
import { fontStyles } from "../utils/Fonts";
import { verticalScale, moderateScale, horizontalScale } from "../utils/scaling";
import colors from "../utils/Colors";

export const ForgotPasswordStyle = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.white,
    },
    inputContainer: {
      marginBottom:verticalScale(16),
      marginTop:verticalScale(32)
    },
    inputContainers: {
      padding: 30,
      flex:1,
      marginTop:verticalScale(63),
      paddingTop:0
    },
    containerStyle:{marginBottom:verticalScale(20)},
    
    
    btnContainer:{ marginTop: verticalScale(71) },
    sentMailcontainer:{ justifyContent: "center", alignItems: "center", flex: 1,marginHorizontal:horizontalScale(24) },
    image:{marginBottom:verticalScale(24)},
    commanTxt:{fontSize:moderateScale(24),textAlign:"center",fontWeight:"bold"},
    btn:{width:"50%",height:verticalScale(59),marginTop:verticalScale(24)}
  });