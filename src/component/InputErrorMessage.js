import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Metrics from '../component/Metrics';
import {FontFamilies} from '../component/Fonts';

const InputFieldErrorMessage = ({
  children,
  errorText,
  errorContainerStyle,
}) => {
  if (!children) {
    return null;
  }
  return (
    <View style={{ ...styles.errorContainer, ...errorContainerStyle }}>
      <Text style={{ ...styles.errorText, ...errorText }}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  errorText: {
    fontSize: Metrics.measure(10),
    fontFamily: FontFamilies.medium,
    color: '#FF1493',
    textAlign: 'center',
  },
  errorContainer: {
    justifyContent: 'center',
    marginBottom : Metrics.measure(20),
  },
});

export default InputFieldErrorMessage;
