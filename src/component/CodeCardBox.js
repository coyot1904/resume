import React from 'react';
import {Text, FlatList, Image, View} from 'react-native';

const PCodeCardBox = props => {
  const {style, img, codinglang} = props;

  return (
    <View style={style}>
      <Image style={style} source={img} />
      <Text style={codinglang}></Text>
    </View>
  );
};

export default PCodeCardBox;
