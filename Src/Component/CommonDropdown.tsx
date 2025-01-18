import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, StyleProp, TextStyle, ViewStyle } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown'; // Correct import
import Ionicons from 'react-native-vector-icons/Ionicons'; // Correct icon import
import colors from '../utils/Colors';
import { horizontalScale, moderateScale } from '../utils/scaling';

interface CommonDropdownProps {
  data: { label: string; value: string }[];
  value: string;
  onChange: (item: { label: string; value: string }) => void;
  placeholder: string;
  containerStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
}

const CommonDropdown: React.FC<CommonDropdownProps> = ({
  data,
  value,
  onChange,
  placeholder,
  containerStyle,
  labelStyle
}) => {

    console.log(data,"data====")
  return (
    <View style={[styles.container, containerStyle]}>
      <Dropdown
      itemTextStyle={{color:colors.black}}
      selectedTextStyle={{color:colors.black}}
        data={data}
        value={value}
        labelField={"label"}
        valueField={"value"}
        onChange={onChange}
        style={styles.dropdown}
        placeholder="Select an item"
        renderRightIcon={() => (
          <Ionicons name="chevron-down-outline" size={20} color={colors.black} />
        )}
        dropdownStyle={styles.dropdownStyle}
      />
    </View>
  );
};

export default CommonDropdown;

const styles = StyleSheet.create({
  container: {
    marginBottom: moderateScale(16),
  },
  label: {
    fontSize: moderateScale(14),
    color: colors.commantxt,
    marginBottom: moderateScale(8),
  },
  dropdown: {
    backgroundColor: colors.inputgraybg,
    borderColor: colors.inputgraybg,
    borderWidth: 1,
    borderRadius:moderateScale(30),
    paddingHorizontal:horizontalScale(15),
    height: moderateScale(56),
    justifyContent: 'center',
  },
  dropdownStyle: {
    backgroundColor: colors.white,
    borderRadius: 8,
    padding: moderateScale(10),
  },
});
