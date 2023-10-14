import {
  BottomTabScreenProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import React from 'react';
import Products from '../screens/Products';
//   import { tabNavigationScreenProps } from '../types/screenOptions';
//   import Product from '../screens/Product';

export type TabsProps = BottomTabScreenProps<TabsParamList>;

export type TabsParamList = {
  Products: undefined;
  Product: { id: number };
};

const Tab = createBottomTabNavigator<TabsParamList>();

export const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName='Products'
      // screenOptions={({ route }) => tabNavigationScreenProps(route)}
    >
      <Tab.Screen name='Products' component={Products} />
      {/* <Tab.Screen
          name='Product'
          component={Product}
          initialParams={{ id: 22 }}
        /> */}
    </Tab.Navigator>
  );
};
