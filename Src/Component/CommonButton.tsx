import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  StyleProp,
  TextStyle,
  ViewStyle,
  ActivityIndicator,
  Image,
  ImageSourcePropType,
  View,
} from 'react-native';
import colors from '../utils/Colors';
import { fontStyles } from '../utils/Fonts';
import { horizontalScale, moderateScale, verticalScale } from '../utils/scaling';

interface CommonButtonProps {
  title: string;
  onPress: () => void;
  loading?: boolean;
  buttonStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  activityIndicatorColor?: string;
  imageSource?: ImageSourcePropType; // Prop to pass the image
  imageStyle?: StyleProp<ViewStyle>; // Optional styling for the image
}

const CommonButton: React.FC<CommonButtonProps> = ({
  title,
  onPress,
  loading = false,
  buttonStyle,
  textStyle,
  activityIndicatorColor = colors.black,
  imageSource,
}) => {
  return (
    <TouchableOpacity
    style={[styles.button, buttonStyle]}
    onPress={onPress}
    activeOpacity={0.8}
    disabled={loading}
  >
      {imageSource ?
        <Image style={[styles.image]} source={imageSource}  />
      :null} 
      <View style={[styles.txtContainer, imageSource ? { marginRight: horizontalScale(25) } : {}]}>
      {loading ? (
        <ActivityIndicator size="small" color={activityIndicatorColor} />
      ) : (
        <Text style={[styles.buttonText, textStyle]}>{title}</Text>
      )}
      </View>
  </TouchableOpacity>
);
};


const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.CommanBlue,
    paddingVertical: verticalScale(12),
    paddingHorizontal: horizontalScale(20),
    borderRadius: moderateScale(30),
    alignItems: 'center',
    justifyContent: 'center',
    height: verticalScale(49),
    flexDirection:"row"
  },
  contentWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: colors.white,
    fontSize: moderateScale(18),
    fontWeight: 'bold',
    fontFamily: fontStyles.fontFamily,
    marginLeft: horizontalScale(8), 
  },
  image: {
    height: verticalScale(25),
    width: horizontalScale(25),
    resizeMode:"contain"
  },
  txtContainer:{flex:1,alignItems:"center",marginRight:horizontalScale(0)}
});

export default CommonButton;
