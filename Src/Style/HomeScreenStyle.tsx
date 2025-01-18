import { StyleSheet } from "react-native";
import colors from "../utils/Colors";
import { fontStyles } from "../utils/Fonts";
import { moderateScale, verticalScale, horizontalScale } from "../utils/scaling";

export const HomeScreenStyle = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal:moderateScale(24)
    },
    
    contentContainer: {
      paddingHorizontal: moderateScale(24), 
      paddingBottom: verticalScale(16), 
    },
    headerContainer: {
      marginTop: verticalScale(34),
    },
    searchbarContainer:{marginTop:verticalScale(24)},
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: verticalScale(16),
      paddingHorizontal: horizontalScale(16),
    },
    profileImage: {
      width: horizontalScale(40),
      height: verticalScale(40),
      borderRadius: moderateScale(20),
      backgroundColor: colors.boxColors,
    },
    dropdownContainer: {
      width:"30%",
      marginHorizontal: horizontalScale(8),
    },
    cartIcon: {
      width: horizontalScale(28),
      height: verticalScale(28),
      tintColor: colors.black,
    },
    searchBarContainer: {
      backgroundColor: colors.inputgraybg,
      borderRadius: moderateScale(8),
      marginBottom: verticalScale(16),
      paddingHorizontal: horizontalScale(12),
      height: verticalScale(40),
      flexDirection: 'row',
      alignItems: 'center',
    },
    searchIcon: {
      marginRight: horizontalScale(8),
    },
    searchBar: {
      fontSize: moderateScale(14),
      color: colors.commantxt,
      flex: 1,
    },
    categoriesSection: {
      marginBottom: verticalScale(16),
    },
    sectionHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: verticalScale(8),
    },
    sectionTitle: {
      fontSize: moderateScale(16),
      fontWeight: 'bold',
      color: colors.black,
    },
    seeAll: {
      fontSize: moderateScale(14),
      color: colors.blue,
    },
    categoryCard: {
      alignItems: 'center',
      marginRight: horizontalScale(16),
    },
    categoryImage: {
      width: horizontalScale(60),
      height: verticalScale(60),
      borderRadius: moderateScale(30),
      backgroundColor: colors.boxColors,
      marginBottom: verticalScale(8),
    },
    categoryName: {
      fontSize: moderateScale(12),
      color: colors.commanTxt,
    },
    section: {
      marginBottom: verticalScale(24),
    },
    productCard: {
      width: horizontalScale(120),
      alignItems: 'center',
      marginRight: horizontalScale(16),
    },
    productCardSelling: {
      width: horizontalScale(159),
      marginRight: horizontalScale(12),
      backgroundColor:colors.inputgraybg,
      height:verticalScale(281),
    },
    productImage: {
      width: "100%",
      height: "80%",
      borderRadius: moderateScale(8),
      backgroundColor: colors.boxColors,
      resizeMode:"center"
    },
    productName: {
      marginTop: verticalScale(8),
      fontSize: moderateScale(12),
      color: colors.commantxt,
      textAlign: 'center',
      fontFamily:fontStyles.fontFamily,
      fontWeight:"bold",
      alignSelf:"flex-start",
      marginHorizontal:horizontalScale(10)
    },
    productPrice: {
      fontSize: moderateScale(12),
      color: colors.black,
      marginTop: verticalScale(4),
      marginHorizontal:horizontalScale(10),
      fontFamily:fontStyles.fontFamily,
      fontWeight:"bold"
    },
    sectionHeaderStyle:{ marginBottom: moderateScale(10) }
  });