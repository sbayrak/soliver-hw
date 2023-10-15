import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageStyle,
  ViewStyle,
  TextStyle,
  ActivityIndicator,
  TouchableOpacity,
  ImageSourcePropType,
  TouchableWithoutFeedback,
} from 'react-native';
import React, { useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { cardShadow, primary } from '../styles/colors';
import { MotiView } from 'moti';
import { flex1 } from '../styles/styles';
import { getAsset } from '../helpers/util';
import { Color, Picture } from '../types/state';
import ProductColor from './product/ProductColor';
import ProductUtility from './product/ProductUtility';

type Props = {
  name: string;
  img: Picture[];
  price: number;
  loading: boolean;
  style?: ViewStyle;
  onPress?: () => void;
  index: number;
  color: Color[];
};

const ProductCard = (props: Props) => {
  const [currentImg, setcurrentImg] = useState(props.img[0].src);

  return (
    <View style={[styles.container, props.style]}>
      <ProductUtility />
      <TouchableOpacity style={styles.btn}>
        {props.loading && !props.img ? (
          <View style={styles.imgPlaceholder}>
            <ActivityIndicator color={primary} size={'large'} />
          </View>
        ) : (
          <MotiView
            style={flex1}
            from={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 500 * props.index }}
          >
            <Image source={currentImg} style={styles.img} resizeMode='cover' />
          </MotiView>
        )}
      </TouchableOpacity>
      {props.loading ? (
        <ActivityIndicator color={primary} size={'small'} />
      ) : (
        <MotiView
          style={styles.wrapper}
          from={{ opacity: 0.7, translateY: 10 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ delay: 1000 * props.index }}
        >
          <Text style={styles.title} numberOfLines={2}>
            {props.name}
          </Text>
          <View style={styles.bottom}>
            <Text style={styles.price}>{props.price}€</Text>
            <ProductColor
              color={props.color}
              setCurrentImg={setcurrentImg}
              picture={props.img}
            />
          </View>
        </MotiView>
      )}
    </View>
  );
};

export default ProductCard;

type Styles = {
  container: ViewStyle;
  wrapper: ViewStyle;
  img: ImageStyle;
  imgPlaceholder: ViewStyle;
  title: TextStyle;
  bottom: ViewStyle;
  price: TextStyle;
  btn: ViewStyle;
};

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1 / 2,
    borderRadius: 15,
    paddingVertical: 10,
    paddingBottom: 20,
    paddingHorizontal: 10,
    marginVertical: 10,
    marginBottom: 10,
    marginHorizontal: 5,
    backgroundColor: '#fff',
    ...cardShadow,
    alignItems: 'center',
  },
  img: {
    height: 150,
    width: 110,
  },
  imgPlaceholder: {
    height: 150,
    width: 125,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: '700',
    marginBottom: 5,
    marginTop: 10,
    textAlign: 'left',
  },
  bottom: {
    flex: 1,
    width: '100%',
  },
  price: {
    color: '#000',
    fontWeight: '500',
  },
  wrapper: {
    width: '100%',
  },
  btn: { flex: 1 },
});
