import React from 'react';
import { FlatList, View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface HorizontalListProps {
  data: any[];
  containerStyle?: object; 
  itemStyle?: object; 
  imageStyle?: object; 
  nameStyle?: object; 
  priceStyle?: object; 
  iconName?: string; 
  iconSize?: number;
  iconStyle?: object;
}

const HorizontalList: React.FC<HorizontalListProps> = ({
  data,
  containerStyle,
  itemStyle,
  imageStyle,
  nameStyle,
  priceStyle,
  iconName = 'heart-outline',
  iconSize = 25,
  iconStyle,
}) => {
  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={[itemStyle]}>
          <ImageBackground
            resizeMode="center"
            style={imageStyle}
            source={item.image}
          >
            <TouchableOpacity>
            <Ionicons
              name={iconName}
              size={iconSize}
              style={[{ alignSelf: 'flex-end', padding: 7 }, iconStyle]}
            />
            </TouchableOpacity>
          </ImageBackground>
          <Text style={nameStyle}>{item?.productname}</Text>
          {item?.price && <Text style={priceStyle}>{item?.price}</Text>}
        </View>
      )}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={containerStyle}
    />
  );
};

export default HorizontalList;
