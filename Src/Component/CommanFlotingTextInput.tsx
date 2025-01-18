import React from 'react';
import { StyleSheet, View, Text, TextInput, StyleProp, ViewStyle, TextStyle } from 'react-native';
import { horizontalScale, moderateScale, verticalScale } from '../utils/scaling';
import colors from '../utils/Colors';

interface CustomFloatingTextInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  containerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  labelStyle?: StyleProp<TextStyle>;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad' | 'url' | 'number-pad' | 'decimal-pad';
  secureTextEntry?: boolean;
}

const CustomFloatingTextInput: React.FC<CustomFloatingTextInputProps> = ({
  value,
  onChangeText,
  placeholder = '',
  containerStyle,
  inputStyle,
  keyboardType = 'default',
  secureTextEntry = false,
}) => {

  return (
    <View style={[styles.container,containerStyle]}>
      <TextInput
        style={[styles.input, inputStyle]}
        value={value}
        onChangeText={onChangeText}
        placeholder= {placeholder} 
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor:colors.inputgraybg,
    paddingHorizontal:horizontalScale(12)
  },
  input: {
    fontSize: moderateScale(16),
    color: colors.black,
    height:verticalScale(56),
  },
});

export default CustomFloatingTextInput;
