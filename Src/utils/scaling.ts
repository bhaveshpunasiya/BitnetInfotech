import { Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

const guidelineBaseWidth = 390; 
const guidelineBaseHeight = 884;

const horizontalScale = (size: number) => (width / guidelineBaseWidth) * size;

const verticalScale = (size: number) => (height / guidelineBaseHeight) * size;

const moderateScale = (size: number, factor: number = 0.5) => {
  return size + (Math.min(width / guidelineBaseWidth, height / guidelineBaseHeight) - 1) * factor * size;
};

export { horizontalScale, verticalScale, moderateScale };
