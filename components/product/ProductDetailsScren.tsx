import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React, { useState } from 'react';
import { MotiView } from 'moti';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { primary, primaryDark } from '../../styles/colors';
import { Product } from '../../types/state';
import Pill from '../Pill';

type Props = {
  product: Product | undefined;
  loading: boolean;
};

const ProductDetailsSection = (props: Props) => {
  const [heart, setHeart] = useState(false);
  const { product, loading } = props;
  return loading && !product ? (
    <View style={{ justifyContent: 'center', height: 300 }}>
      <ActivityIndicator color={primary} size={'small'} />
    </View>
  ) : (
    <MotiView
      style={styles.detailsContainer}
      from={{ opacity: 0, translateY: 50 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ delay: 1000 }}
    >
      <Text style={styles.title}>{'product title'}</Text>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>€{product?.price}</Text>
        <Pill />
      </View>
      <Text style={styles.desc}>{'product?.description'}</Text>
      <View style={styles.deliveryContainer}>
        <View style={styles.deliveryIcon}>
          <AntDesign name='clockcircleo' size={24} color='black' />
        </View>
        <View>
          <Text style={styles.textDelivery}>Delivery Time</Text>
          <Text style={{ fontWeight: '600' }}>6-8 Hours</Text>
        </View>
      </View>
      <View style={styles.addCartContainer}>
        <TouchableOpacity style={styles.btn} onPress={() => setHeart(!heart)}>
          <AntDesign
            name={heart ? 'heart' : 'hearto'}
            size={24}
            color='black'
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.cta}>
          <Text style={styles.ctaText}>Buy Now</Text>
          <Feather name='shopping-cart' size={20} color='white' />
        </TouchableOpacity>
      </View>
    </MotiView>
  );
};

export default ProductDetailsSection;

type Styles = {
  detailsContainer: ViewStyle;
  title: TextStyle;
  priceContainer: ViewStyle;
  price: TextStyle;
  desc: TextStyle;
  deliveryContainer: ViewStyle;
  deliveryIcon: ViewStyle;
  addCartContainer: ViewStyle;
  btn: ViewStyle;
  cta: ViewStyle;
  ctaText: TextStyle;
  textDelivery: TextStyle;
};

const styles = StyleSheet.create<Styles>({
  detailsContainer: {
    paddingHorizontal: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    marginVertical: 20,
    paddingTop: 40,
    backgroundColor: '#fff',
    paddingBottom: 40,
    marginTop: -25,
  },
  title: {
    fontWeight: '700',
    letterSpacing: 1,
    fontSize: 24,
    marginBottom: 30,
    color: '#444',
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  price: {
    fontWeight: '500',
    fontSize: 36,
    color: primary,
  },

  desc: {
    opacity: 0.8,
    marginBottom: 30,
    color: '#444',
  },
  deliveryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  deliveryIcon: {
    backgroundColor: 'rgba(0,0,0,0.07)',
    padding: 10,
    borderRadius: 10,
    marginRight: 10,
  },
  addCartContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btn: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.5)',
    borderRadius: 10,
    padding: 10,
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
  cta: {
    width: '70%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: primaryDark,
  },
  ctaText: {
    color: '#fff',
    fontWeight: '500',
    letterSpacing: 1,
    marginRight: 10,
  },
  textDelivery: {
    color: 'rgba(0,0,0,0.3)',
    fontSize: 12,
    marginBottom: 5,
  },
});
