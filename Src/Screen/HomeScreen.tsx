import React, { useState } from 'react';
import {
  View,
  ScrollView,
} from 'react-native';
import { images } from '../utils/Images';
import CommonHeader from '../Component/CommonHeader';
import SearchBarComman from '../Component/SearchBarComman';
import SectionHeader from '../Component/SectionHeader';
import { useNavigation } from '@react-navigation/native';
import { categories, dropdownData, mainarr } from '../StaticData';
import { HomeScreenStyle } from '../Style/HomeScreenStyle';
import HorizontalList from '../Component/HorizontalList';
import CategoryListComman from '../Component/CategoryListComman';


const HomeScreen = () => {

  const navigation = useNavigation<any>()

  const [selectedDropdownValue, setSelectedDropdownValue] = useState<string>('men');
  const [searchValue, setSearchValue] = useState('');


  const handleDropdownChange = (item: { label: string; value: string }) => {
    setSelectedDropdownValue(item.value);
    console.log('Selected:', item);
  };

  const renderHorizontalList = (productList: any[]) => (
    <HorizontalList
      data={productList}
      containerStyle={{ marginBottom: 16 }}
      itemStyle={HomeScreenStyle.productCardSelling}
      imageStyle={HomeScreenStyle.productImage}
      nameStyle={HomeScreenStyle.productName}
      priceStyle={HomeScreenStyle.productPrice}
      iconName="heart-outline"
      iconSize={25}
      iconStyle={{ color: '#000' }}
    />
  );

  const RenderCategories = () => {
    return (
    <CategoryListComman
      data={categories}
      itemStyle={HomeScreenStyle.categoryCard}
      imageStyle={HomeScreenStyle.categoryImage}
      nameStyle={HomeScreenStyle.categoryName}
    />
  )
  };

  return (
    <ScrollView
      contentContainerStyle={HomeScreenStyle.contentContainer} 
      showsVerticalScrollIndicator={false} 
    >
      <View style={HomeScreenStyle.headerContainer}>
        <CommonHeader
          profileImage={images.ProfileHeader}
          dropdownData={dropdownData}
          selectedDropdownValue={selectedDropdownValue}
          onDropdownChange={handleDropdownChange}
        />
      </View>
  
      <View style={HomeScreenStyle.searchbarContainer}>
        <SearchBarComman
          placeholder="Search"
          value={searchValue}
          onChangeText={(text) => setSearchValue(text)}
        />
      </View>
  
      <View style={HomeScreenStyle.categoriesSection}>
        <SectionHeader
          sectionHeaderStyle={HomeScreenStyle.sectionHeaderStyle}
          title="Categories"
          onPressSeeAll={() => navigation.navigate("ListScreen",{categories})}
        />
        <RenderCategories/>
      </View>
  
      {mainarr?.map((section, index) => (
        <View key={index} style={HomeScreenStyle.section}>
          <SectionHeader
            sectionHeaderStyle={HomeScreenStyle.sectionHeaderStyle}
            title={section.name}
            onPressSeeAll={() => {}}
          />
          {renderHorizontalList(section.productList)}
        </View>
      ))}
    </ScrollView>
  );
};


export default HomeScreen;
