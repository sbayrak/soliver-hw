import { StyleSheet, View, ViewStyle } from 'react-native';
import React, { useState } from 'react';
import { useProducts } from '../hooks/useProducts';
import { SafeAreaView } from 'react-native-safe-area-context';
import { gray, primary } from '../styles/colors';
import { TabsParamList, TabsProps } from '../navigations/TabNavigation';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import DismissKeyboard from '../components/DismissKeyboard';
import ProductsList from '../components/product/ProductsList';
import { StatusBar } from 'expo-status-bar';
import { flex1 } from '../styles/styles';

type Props = BottomTabScreenProps<TabsParamList, 'Products'>;

const Products = (props: Props) => {
  return (
    <View style={styles.container}>
      <StatusBar style='dark' />
      <SafeAreaView style={flex1}>
        <DismissKeyboard>
          <View style={styles.wrapper}>
            <ProductsList navigation={props.navigation} />
          </View>
        </DismissKeyboard>
      </SafeAreaView>
    </View>
  );
};

export default Products;

type Styles = {
  container: ViewStyle;
  wrapper: ViewStyle;
};

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    backgroundColor: gray,
  },
  wrapper: { flex: 1, paddingHorizontal: 20 },
});
