import React from 'react';
import { StyleSheet, TextInput, View, StyleProp, ViewStyle, TextInputProps } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from '../utils/Colors';
import { horizontalScale, verticalScale, moderateScale } from '../utils/scaling';

interface SearchBarProps extends TextInputProps {
  placeholder?: string;
  containerStyle?: StyleProp<ViewStyle>;
}

const SearchBarComman: React.FC<SearchBarProps> = ({ placeholder = 'Search', containerStyle, ...props }) => {
  return (
    <View style={[styles.searchBarContainer, containerStyle]}>
      <MaterialIcons name="search" size={24} color={colors.black} style={styles.searchIcon} />
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={colors.black}
        style={styles.searchBar}
        {...props}
      />
    </View>
  );
};

export default SearchBarComman;

const styles = StyleSheet.create({
  searchBarContainer: {
    backgroundColor: colors.inputgraybg,
    borderRadius: moderateScale(20),
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
    color: colors.black,
    flex: 1,
  },
});
