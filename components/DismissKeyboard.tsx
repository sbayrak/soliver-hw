import { TouchableWithoutFeedback } from 'react-native';
import React from 'react';

type Props = {
  children: JSX.Element | JSX.Element[];
};

const DismissKeyboard = ({ children }: Props) => {
  return (
    <TouchableWithoutFeedback style={{ flex: 1 }}>
      {children}
    </TouchableWithoutFeedback>
  );
};

export default DismissKeyboard;
