import { StyleSheet } from "react-native";
import colors from "../utils/Colors";
import { horizontalScale, verticalScale, moderateScale } from "../utils/scaling";

export const ListScreenStyle = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.white,
    },
    childContainer:{
      marginTop:verticalScale(40),
      justifyContent:"center",
      paddingHorizontal:horizontalScale(24)
  
    },
    backButton: {
      marginBottom: verticalScale(10),
    },
    backButtonText: {
      fontSize: moderateScale(16),
      color: colors.darkGray,
    },
    headerText: {
      fontSize: moderateScale(20),
      fontWeight: 'bold',
      marginBottom: verticalScale(15),
      color: colors.black,
    },
    categoryItemContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: colors.inputgraybg,
      padding: moderateScale(15),
      borderRadius: moderateScale(10),
      marginVertical: verticalScale(8),
    },
    categoryImage: {
      width: horizontalScale(40),
      height: verticalScale(40),
      borderRadius: moderateScale(5),
      marginRight: horizontalScale(15),
    },
    categoryText: {
      fontSize: moderateScale(16),
      fontWeight: '500',
      color: colors.black,
    },
  });