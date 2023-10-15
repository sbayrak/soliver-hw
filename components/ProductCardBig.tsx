import {
  StyleSheet,
  Text,
  View,
  Image,
  ViewStyle,
  ImageStyle,
  TextStyle,
  TouchableOpacity,
  ImageProps,
  ActivityIndicator,
  ImageSourcePropType,
} from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Product } from '../types/state';
import {
  backgroundColor,
  cardBg,
  cardShadow,
  primary,
  primaryDark,
  primaryLight,
  transparentText,
} from '../styles/colors';
import { MotiView } from 'moti';

type Props = {
  image: ImageSourcePropType;
  loading: boolean;
  onPress: () => void;
};

const ProductCardBig = (props: Props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <View style={styles.textContainer}>
        {props.loading && !props.image ? (
          <ActivityIndicator color={primary} size={'large'} />
        ) : (
          <MotiView
            style={styles.innerContainer}
            from={{ opacity: 0, translateX: 50 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ type: 'timing', delay: 1000 }}
          >
            <Text style={styles.title}>Stylish by design.</Text>
            <Text style={styles.desc}>Simple by look, see more.</Text>
            <MotiView
              from={{ translateX: 0 }}
              animate={{ translateX: 50 }}
              transition={{ type: 'spring', loop: true }}
            >
              <AntDesign name='arrowright' size={24} color='black' />
            </MotiView>
          </MotiView>
        )}
      </View>
      {props.loading && !props.image ? (
        <View style={styles.imgPlaceholder}>
          <ActivityIndicator color={primary} size={'large'} />
        </View>
      ) : (
        <MotiView
          style={styles.innerContainer}
          from={{ opacity: 0, translateX: 0 }}
          animate={{ opacity: 1, translateX: 50 }}
          transition={{ type: 'timing', delay: 1000 }}
        >
          <Image source={props.image} style={styles.img} />
        </MotiView>
      )}
    </TouchableOpacity>
  );
};

export default ProductCardBig;

type Styles = {
  container: ViewStyle;
  innerContainer: ViewStyle;
  imgPlaceholder: ViewStyle;
  textContainer: ViewStyle;
  img: ImageStyle;
  title: TextStyle;
  desc: TextStyle;
};

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 15,
    paddingHorizontal: 20,
    paddingVertical: 40,
    backgroundColor: cardBg,
    ...cardShadow,
    marginBottom: 40,
  },
  innerContainer: {
    flex: 1,
  },
  textContainer: { flex: 1 },
  img: {
    width: 100,
    height: 150,
  },
  imgPlaceholder: {
    height: 150,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: '800',
    color: primaryDark,
    paddingBottom: 20,
  },
  desc: {
    paddingBottom: 20,
    fontWeight: '600',
    color: transparentText,
  },
});
