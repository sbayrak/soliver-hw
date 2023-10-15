import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { colors } from '../data';
import { Color } from '../types/state';

type Props = {
  currentColor: Color;
  setCurrentColor: React.Dispatch<React.SetStateAction<Color>>;
};

const ColorItem = (props: Props) => {
  const { currentColor, setCurrentColor } = props;

  return (
    <View style={{ flex: 1, flexDirection: 'row' }}>
      {colors.map((color) => (
        <TouchableOpacity
          onPress={() => {
            if (color.name === currentColor.name)
              setCurrentColor({ code: '', name: '' });
            else setCurrentColor(color);
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

export default ColorItem;

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
