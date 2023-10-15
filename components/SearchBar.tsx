import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { cardShadow, primary } from '../styles/colors';
import { MotiView } from 'moti';
import { useIsFocused } from '@react-navigation/native';
import Slider from '@react-native-community/slider';
import ColorItem from './ColorItem';
import { Color } from '../types/state';

type Props = {
  searchedTerm: string;
  setSearchedTerm: (text: string) => any;
  price: number;
  setPrice: React.Dispatch<React.SetStateAction<number>>;
  currentColor: Color;
  setCurrentColor: React.Dispatch<React.SetStateAction<Color>>;
};

const SearchBar = (props: Props) => {
  const isFocus = useIsFocused();
  const [modal, setModal] = useState(false);
  const { currentColor, price, setCurrentColor, setPrice } = props;
  const btnDisabled = !price && !currentColor;
  const [loading, setLoading] = useState(false);

  return (
    <MotiView
      style={styles.container}
      from={{ opacity: isFocus ? 0 : 1, translateY: isFocus ? -50 : 0 }}
      animate={{ opacity: isFocus ? 1 : 0, translateY: isFocus ? 0 : -50 }}
      transition={{ type: 'spring', delay: 1000 }}
    >
      <TouchableOpacity style={styles.btn} onPress={() => setModal(!modal)}>
        <View style={styles.root}>
          <AntDesign name='filter' size={16} color='black' />
          <Text style={styles.filter}>Filter</Text>
        </View>
        <AntDesign
          name={modal ? 'arrowdown' : 'arrowright'}
          size={16}
          color='black'
        />
      </TouchableOpacity>

      {modal ? (
        <MotiView
          style={styles.modalContainer}
          from={{ opacity: modal ? 0 : 1, translateY: modal ? -50 : 0 }}
          animate={{ opacity: modal ? 1 : 0, translateY: modal ? 0 : -50 }}
          transition={{ type: 'spring', delay: 100 }}
        >
          <View style={styles.filterItem}>
            <Text style={{ fontWeight: '500' }}>
              Price (min {price.toFixed(0)}€){' '}
            </Text>
            <Slider
              style={{ width: '100%' }}
              minimumValue={0}
              maximumValue={200}
              minimumTrackTintColor='lightgrey'
              maximumTrackTintColor='grey'
              value={price}
              onValueChange={(value) => {
                setLoading(true);
                setPrice(value);

                setTimeout(() => setLoading(false), 1000);
              }}
            />
          </View>
          <View style={styles.filterItem}>
            <Text style={{ fontWeight: '500' }}>
              Color {currentColor.name ? `(${currentColor.name})` : null}
            </Text>
            <ColorItem
              currentColor={currentColor}
              setCurrentColor={setCurrentColor}
            />
          </View>

          <TouchableOpacity
            style={[
              styles.apply,
              { backgroundColor: btnDisabled ? '#c0c0c0' : primary },
            ]}
            disabled={btnDisabled}
            onPress={() => setModal(false)}
          >
            <Text
              style={{
                color: '#fff',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {loading ? (
                <>
                  Applying Filters{' '}
                  <ActivityIndicator color={'#fff'} size={'small'} />
                </>
              ) : (
                'Close'
              )}
            </Text>
          </TouchableOpacity>
        </MotiView>
      ) : null}
    </MotiView>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    ...cardShadow,
    backgroundColor: '#fff',
    marginBottom: 20,
  },
  btn: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 25,
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  root: {
    flexDirection: 'row',
  },
  filter: {
    paddingLeft: 10,
  },
  modalContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  filterItem: {
    marginBottom: 15,
  },
  apply: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: primary,
    ...cardShadow,
    marginVertical: 20,
  },
});
