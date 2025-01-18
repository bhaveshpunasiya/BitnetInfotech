import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image, StyleProp, ViewStyle } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CommonDropdown from './CommonDropdown';
import colors from '../utils/Colors';
import { horizontalScale, verticalScale, moderateScale } from '../utils/scaling';

interface CommonHeaderProps {
  profileImage: any;
  dropdownData: { label: string; value: string }[];
  selectedDropdownValue: string;
  onDropdownChange: (item: { label: string; value: string }) => void;
  containerStyle?: StyleProp<ViewStyle>;
}

const CommonHeader: React.FC<CommonHeaderProps> = ({
  profileImage,
  dropdownData,
  selectedDropdownValue,
  onDropdownChange,
  containerStyle,
}) => {
  return (
    <View style={[styles.header, containerStyle]}>
      <TouchableOpacity>
        <Image style={styles.profileImage} source={profileImage} />
      </TouchableOpacity>

      <CommonDropdown
        data={dropdownData}
        value={selectedDropdownValue}
        onChange={onDropdownChange}
        placeholder="Select Category"
        containerStyle={styles.dropdownContainer}
        dropdownStyles={styles.dropdownStyle}
        selectedTextStyle={{fontSize:moderateScale(14),color:colors.black}}
      />

      <TouchableOpacity style={styles.cartButton}>
        <Ionicons name="bag-outline" color={colors.white} size={20} />
      </TouchableOpacity>
    </View>
  );
};

export default CommonHeader;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: verticalScale(16),
  },
  profileImage: {
    width: horizontalScale(40),
    height: verticalScale(40),
    borderRadius: moderateScale(20),
    backgroundColor: colors.boxColors,
  },
  dropdownContainer: {
    width: '35%',
    marginHorizontal: horizontalScale(8),
    marginBottom:0,
    // alignItems:"center",
    justifyContent:"center"
  },
  cartButton: {
    backgroundColor: colors.CommanBlue,
    padding: moderateScale(11),
    borderRadius: 50,
  },
  dropdownStyle:{
    backgroundColor: colors.inputgraybg,
    borderColor: colors.inputgraybg,
    borderWidth: 1,
    borderRadius:moderateScale(30),
    paddingHorizontal:horizontalScale(15),
    height: verticalScale(45),
    justifyContent: 'center',
  }
});
