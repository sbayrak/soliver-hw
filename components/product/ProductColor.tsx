import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageURISource,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { Color, Picture } from '../../types/state';

type Props = {
  color: Color[];
  setCurrentImg: React.Dispatch<
    React.SetStateAction<number | ImageURISource | ImageURISource[]>
  >;
  picture: Picture[];
};

const ProductColor = (props: Props) => {
  const [currentColor, setCurrentColor] = useState<Color>(props.color[0]);

  return (
    <View style={{ flex: 1, flexDirection: 'row' }}>
      {props.color.map((color) => (
        <TouchableOpacity
          onPress={() => {
            setCurrentColor(color);
            const pic =
              props.picture.find((pic) => pic.name === color.name)?.src ??
              props.picture[0].src;
            props.setCurrentImg(pic);
          }}
          style={styles.btn}
          key={color.name}
        >
          <View style={[styles.color, { backgroundColor: color.code }]} />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default ProductColor;

const styles = StyleSheet.create({
  btn: {
    width: 30,
    height: 30,
    borderRadius: 50,
    backgroundColor: '#000',
    zIndex: 99,
    marginTop: 5,
    marginRight: 5,
  },
  color: {
    width: 30,
    height: 30,
    borderRadius: 50,
    backgroundColor: '#000',
    padding: 2,
    borderWidth: 2,
    borderColor: '#fff',
  },
});
