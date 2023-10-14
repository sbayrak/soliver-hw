import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import ProductCardBig from '../ProductCardBig';
import SearchBar from '../SearchBar';
import SkeletonProducts from '../SkeletonProducts';
import ProductCard from '../ProductCard';
import { useProducts } from '../../hooks/useProducts';
import { useDebouncedSearch } from '../../hooks/useDebouncedSearch';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { TabsParamList } from '../../navigations/TabNavigation';

type Props = {
  navigation: BottomTabNavigationProp<TabsParamList, 'Products', undefined>;
};

const ProductsList = (props: Props) => {
  const { products, loading, error, refetch } = useProducts();
  const [searchTerm, setSearchTerm] = useState('');
  const { searchedProducts, loadingDebounced } = useDebouncedSearch(searchTerm);

  console.log('producs ate ', products);

  return (
    <FlatList
      refreshing={loading || loadingDebounced}
      onRefresh={() => refetch()}
      ListHeaderComponent={
        <>
          {/* <ProductCardBig
            loading={loading || loadingDebounced}
            image={products[0]?.pictures[0].src}
            onPress={() =>
              props.navigation.navigate('Product', {
                id: products[0].id,
              })
            }
          /> */}
          <SearchBar
            searchedTerm={searchTerm}
            setSearchedTerm={setSearchTerm}
          />
        </>
      }
      ListEmptyComponent={<SkeletonProducts />}
      data={searchedProducts?.length ? searchedProducts : products}
      renderItem={({ item, index }) => (
        <ProductCard
          onPress={() =>
            props.navigation.navigate('Product', { id: item.id ?? 1 })
          }
          loading={loading || loadingDebounced}
          img={item.images[0]}
          price={item.price ?? 0}
          title={item.title}
          key={item.id}
          index={index}
        />
      )}
      keyExtractor={(item) => item.id.toString()}
      horizontal={false}
      numColumns={2}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default ProductsList;

const styles = StyleSheet.create({});
