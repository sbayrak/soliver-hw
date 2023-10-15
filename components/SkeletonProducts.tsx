import { StyleSheet, View, ViewStyle } from 'react-native';
import React from 'react';

const NUM_OF_PLACEHOLDER_PRODUCTS = 6;
const placeholderProducts = [...Array(NUM_OF_PLACEHOLDER_PRODUCTS).keys()];

const SkeletonProducts = () => {
  return <View />;
};

export default SkeletonProducts;

type Styles = {
  container: ViewStyle;
};

const styles = StyleSheet.create<Styles>({
  container: {
    height: 200,
    width: 150,
  },
});
