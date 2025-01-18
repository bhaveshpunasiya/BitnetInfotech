import React from 'react';
import { View, Text, TouchableOpacity, GestureResponderEvent, ViewStyle, TextStyle } from 'react-native';
import { moderateScale } from '../utils/scaling';
import colors from '../utils/Colors';

interface SectionHeaderProps {
  title: string;
  onPressSeeAll: () => void;
  sectionHeaderStyle?: ViewStyle;
  sectionTitleStyle?: TextStyle;
  seeAllStyle?: TextStyle;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  onPressSeeAll,
  sectionHeaderStyle,
  sectionTitleStyle,
  seeAllStyle,
}) => {
  return (
    <View style={{ ...styles.sectionHeader, ...sectionHeaderStyle }}>
      <Text style={{ ...styles.sectionTitle, ...sectionTitleStyle }}>{title}</Text>
      <TouchableOpacity onPress={onPressSeeAll}>
        <Text style={{ ...styles.seeAll, ...seeAllStyle }}>See All</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  sectionTitle: {
    fontSize:moderateScale(18),
    fontWeight: 'bold',
  },
  seeAll: {
    color: colors.black,
  },
};

export default SectionHeader;
