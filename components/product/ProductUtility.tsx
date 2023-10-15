import { StyleSheet, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { cardShadow } from '../../styles/colors';

const ProductUtility = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn}>
        <AntDesign name='hearto' size={12} color='red' />
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}>
        <FontAwesome5 name='shopping-bag' size={12} color='black' />
      </TouchableOpacity>
    </View>
  );
};

export default ProductUtility;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 2,
    right: 20,
    top: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 34,
    height: 34,
    borderRadius: 68,
    ...cardShadow,
    backgroundColor: '#fff',
    marginBottom: 5,
  },
});
