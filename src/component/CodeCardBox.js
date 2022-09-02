import React from 'react';
import {Text, FlatList, Image, View} from 'react-native';

import styles from './style/CodeCardBoxStyles';

const PCodeCardBox = props => {
  const {img, codinglang , incomingStyle} = props;

  return (
    <View style={[styles.container , incomingStyle.container]}>
      <Image style={style} source={img} />
      <Text style={codinglang}></Text>
    </View>
  );
};

export default PCodeCardBox;
