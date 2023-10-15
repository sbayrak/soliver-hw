import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useState, useCallback, useMemo } from 'react';
import ProductCardBig from '../ProductCardBig';
import SearchBar from '../SearchBar';
import SkeletonProducts from '../SkeletonProducts';
import ProductCard from '../ProductCard';
import { useProducts } from '../../hooks/useProducts';
import { useDebouncedSearch } from '../../hooks/useDebouncedSearch';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { TabsParamList } from '../../navigations/TabNavigation';
import { Color, Product } from '../../types/state';

type Props = {
  navigation: BottomTabNavigationProp<TabsParamList, 'Products', undefined>;
};

const ProductsList = (props: Props) => {
  const { products, loading, error, refetch } = useProducts();
  const [searchTerm, setSearchTerm] = useState('');
  const { searchedProducts, loadingDebounced } = useDebouncedSearch(searchTerm);
  const [price, setPrice] = useState(0);
  const [currentColor, setCurrentColor] = useState<Color>({
    code: '',
    name: '',
  });

  const filteredProducts = useMemo((): Product[] => {
    let newProducts = [...products];

    if (price && !currentColor.name) {
      return newProducts.filter((product) => product.price > price);
    } else if (!price && currentColor.name) {
      return newProducts.filter((product) =>
        product.colors.some((color) => color.name === currentColor.name)
      );
    } else if (price && currentColor.name) {
      return newProducts.filter((product) => {
        if (
          product.price > price &&
          product.colors.some((color) => color.name === currentColor.name)
        ) {
          return product;
        }
      });
    } else {
      return products;
    }

    return newProducts;
  }, [price, currentColor, products[0]?.id, currentColor.name]);

  return (
    <FlatList
      refreshing={loading || loadingDebounced}
      onRefresh={() => refetch()}
      ListHeaderComponent={
        <>
          <ProductCardBig
            loading={loading || loadingDebounced}
            image={products[0]?.pictures[0].src}
            onPress={() => {}}
          />
          <SearchBar
            searchedTerm={searchTerm}
            setSearchedTerm={setSearchTerm}
            currentColor={currentColor}
            setCurrentColor={setCurrentColor}
            price={price}
            setPrice={setPrice}
          />
        </>
      }
      ListEmptyComponent={<SkeletonProducts />}
      data={searchedProducts?.length ? searchedProducts : filteredProducts}
      renderItem={({ item, index }) => (
        <ProductCard
          onPress={() => {
            // props.navigation.navigate('Product', { id: item.id ?? 1 })
          }}
          loading={loading || loadingDebounced}
          img={item.pictures}
          price={item.price ?? 0}
          name={item.name}
          key={item.id}
          index={index}
          color={item.colors}
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
