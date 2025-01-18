import React from 'react';
import { StyleSheet, Text, View, StyleProp, TextStyle, ViewStyle, TouchableOpacity } from 'react-native';
import colors from '../utils/Colors';
import { moderateScale } from '../utils/scaling';

interface CommonTextProps {
  primaryText: string;
  secondaryText?: string;
  containerStyle?: StyleProp<ViewStyle>;
  primaryTextStyle?: StyleProp<TextStyle>;
  secondaryTextStyle?: StyleProp<TextStyle>;
  onPress?:()=>void
}

const CommonText: React.FC<CommonTextProps> = ({
  primaryText,
  secondaryText,
  containerStyle,
  primaryTextStyle,
  secondaryTextStyle,
  onPress
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={[styles.primaryText, primaryTextStyle]}>{primaryText}</Text>
      <TouchableOpacity onPress={onPress}>
      <Text style={[styles.secondaryText, secondaryTextStyle]}>{secondaryText}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CommonText;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  primaryText: {
    color: colors.commantxt,
    fontSize: moderateScale(14),
  },
  secondaryText: {
    color: colors.black,
    fontWeight: '700',
    fontSize: moderateScale(14),
    marginLeft: moderateScale(4),
  },
});
