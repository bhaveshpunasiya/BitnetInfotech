import React from 'react';
import { FlatList, View, Text, ImageBackground, TouchableOpacity, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface CategoryListCommanProps {
    data: any[];
    categoryCard?: object;
    itemStyle?: object;
    imageStyle?: object;
    nameStyle?: object;
}

const CategoryListComman: React.FC<CategoryListCommanProps> = ({
    data,
    itemStyle,
    imageStyle,
    nameStyle,
}) => {
    return (
        <FlatList
            data={data}
            horizontal
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
                <View style={itemStyle}>
                    <Image style={imageStyle} source={item.image} />
                    <Text style={nameStyle}>{item?.name}</Text>
                </View>
            )}
            showsHorizontalScrollIndicator={false}
        />
    );
};

export default CategoryListComman;
