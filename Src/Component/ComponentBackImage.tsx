import React from 'react';
import { View, Image, StyleSheet, ImageSourcePropType, StyleProp, ViewStyle, TouchableOpacity } from 'react-native';
import { images } from '../utils/Images';
import { horizontalScale, moderateScale, verticalScale } from '../utils/scaling';
import colors from '../utils/Colors';

interface CircleImageButtonProps {
  imageSource?: ImageSourcePropType; 
  containerStyle?: StyleProp<ViewStyle>; 
  defaultImage?: ImageSourcePropType;
  onPress?:()=>void 
}

const CircleImageButton: React.FC<CircleImageButtonProps> = ({
  imageSource,
  containerStyle,
  defaultImage = images.arrowleft,
  onPress
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <TouchableOpacity onPress={onPress} style={styles.circle}>
        <Image source={imageSource || defaultImage} style={styles.image} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
  },
  circle: {
    backgroundColor: colors.inputgraybg,
    padding: 15,
    borderRadius:moderateScale(50),
  },
  image: {
    height: verticalScale(18),
    width: horizontalScale(18),
    resizeMode: 'contain',
  },
});

export default CircleImageButton;
