import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React, { useState } from 'react';

const Pill = () => {
  const [count, setCount] = useState(1);

  const handleCount = (operation: 'minus' | 'plus') => {
    if (operation === 'minus') {
      setCount((prev) => {
        if (prev === 0) {
          return 0;
        } else {
          return prev - 1;
        }
      });
    } else if (operation === 'plus') {
      setCount((prev) => {
        if (prev === 10) {
          return 10;
        } else {
          return prev + 1;
        }
      });
    }
  };

  return (
    <View style={styles.pillContainer}>
      <TouchableOpacity
        style={styles.pillBtn}
        onPress={() => handleCount('minus')}
      >
        <Text style={styles.pillFunc}>-</Text>
      </TouchableOpacity>
      <Text style={styles.pillCount}>{count}</Text>
      <TouchableOpacity
        style={styles.pillBtn}
        onPress={() => handleCount('plus')}
      >
        <Text style={styles.pillFunc}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Pill;

type Styles = {
  pillContainer: ViewStyle;
  pillBtn: ViewStyle;
  pillFunc: TextStyle;
  pillCount: TextStyle;
};

const styles = StyleSheet.create<Styles>({
  pillContainer: {
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    borderBottomRightRadius: 60,
    borderBottomLeftRadius: 60,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'rgba(0,0,0,0.2)',
    borderWidth: 1,
  },
  pillBtn: {
    width: 30,
    height: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
  pillFunc: { fontWeight: '700', fontSize: 24 },
  pillCount: {
    marginVertical: 10,
    marginHorizontal: 20,
    fontWeight: '600',
    maxWidth: 20,
    minWidth: 20,
    textAlign: 'center',
  },
});
