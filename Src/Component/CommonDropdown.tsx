import React from 'react';
import { StyleSheet, View, StyleProp, TextStyle, ViewStyle } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown'; 
import Ionicons from 'react-native-vector-icons/Ionicons'; 
import colors from '../utils/Colors';
import { horizontalScale, moderateScale } from '../utils/scaling';

interface CommonDropdownProps {
  data: { label: string; value: string }[];
  value: string;
  onChange: (item: { label: string; value: string }) => void;
  placeholder: string;
  containerStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  dropdownStyles?: any;
  selectedTextStyle?: StyleProp<TextStyle>; 
}

const CommonDropdown: React.FC<CommonDropdownProps> = ({
  data,
  value,
  onChange,
  placeholder,
  containerStyle,
  labelStyle,
  dropdownStyles,
  selectedTextStyle, 
}) => {
  console.log(data, "data====");
  return (
    <View style={[styles.container, containerStyle]}>
      <Dropdown
        data={data}
        value={value}
        labelField="label"
        valueField="value"
        onChange={onChange}
        style={[styles.dropdown, dropdownStyles]}
        placeholder={placeholder}
        renderRightIcon={() => (
          <Ionicons name="chevron-down-outline" size={20} color={colors.black} />
        )}
        selectedTextStyle={[styles.defaultSelectedTextStyle, selectedTextStyle]} 
        itemTextStyle={{ color: colors.black }}
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
  dropdown: {
    backgroundColor: colors.inputgraybg,
    borderColor: colors.inputgraybg,
    borderWidth: 1,
    borderRadius: moderateScale(30),
    paddingHorizontal: horizontalScale(15),
    height: moderateScale(56),
    justifyContent: 'center',
  },
  defaultSelectedTextStyle: {
    color: colors.black,
    fontSize: moderateScale(14),
  },
  dropdownStyle: {
    backgroundColor: colors.white,
    borderRadius: 8,
    padding: moderateScale(10),
  },
});
