import {
  StyleSheet,
  Image,
  View,
  ActivityIndicator,
  ViewStyle,
  ImageStyle,
} from 'react-native';
import React from 'react';
import { MotiView } from 'moti';
import { Product } from '../../types/state';
import { primary } from '../../styles/colors';

type Props = {
  product: Product | undefined;
  loading: boolean;
};

const ProductImage = (props: Props) => {
  const { product, loading } = props;

  return loading && !product ? (
    <View style={styles.imgPlaceholder}>
      <ActivityIndicator color={primary} size={'large'} />
    </View>
  ) : (
    <MotiView
      style={styles.imgWrapper}
      from={{ opacity: 0, translateY: -50 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ delay: 500 }}
      exit={{ opacity: 0, translateY: -50 }}
    >
      <Image
        source={{
          uri: product?.pictures[0].src,
        }}
        style={styles.img}
        resizeMode='stretch'
      />
    </MotiView>
  );
};

export default ProductImage;

type Styles = {
  imgWrapper: ViewStyle;
  imgPlaceholder: ViewStyle;
  img: ImageStyle;
};

const styles = StyleSheet.create<Styles>({
  imgPlaceholder: {
    width: '100%',
    height: 300,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingBottom: 20,
  },
  img: {
    width: '100%',
    height: 350,
    objectFit: 'cover',
    paddingBottom: 20,
  },

  imgWrapper: {
    flex: 1,
    width: '100%',
  },
});
