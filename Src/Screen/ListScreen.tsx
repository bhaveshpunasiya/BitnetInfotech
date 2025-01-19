import React from 'react';
import {
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Image,
  Text,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import colors from '../utils/Colors';
import { horizontalScale, verticalScale, moderateScale } from '../utils/scaling';
import { CreateAccountStyle } from '../Style/CreateAccountStyle';
import CircleImageButton from '../Component/ComponentBackImage';
import CommonText from '../Component/CommanBoldTxt';
import { ListScreenStyle } from '../Style/ListScreenStyle';
interface ListScreenProps {
  route: any;
}

const ListScreen: React.FC<ListScreenProps> = (props) => {
  const categoriesData = props.route.params?.categories ?? [];
  const navigation = useNavigation<any>();

  const renderCategoryItem = ({ item }: { item: any }) => (
    <TouchableOpacity
      style={ListScreenStyle.categoryItemContainer}
      onPress={() => {}}
    >
      <Image
        source={ item.image }
        style={ListScreenStyle.categoryImage}
        resizeMode="contain"
      />
      <Text style={ListScreenStyle.categoryText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={ListScreenStyle.container}>
      <View style={ListScreenStyle.childContainer}>
      <CircleImageButton containerStyle={CreateAccountStyle.containerStyle} onPress={() => navigation.goBack()} />
      <CommonText text={'Shop by Categories'} />
      
      <FlatList
        data={categoriesData}
        renderItem={renderCategoryItem}
        keyExtractor={(item, index) => index?.toString()}
        showsVerticalScrollIndicator={false}
      />
      </View>
       
    </SafeAreaView>
  );
};


export default ListScreen;
