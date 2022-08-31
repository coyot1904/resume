import React from 'react';
import {Text, FlatList} from 'react-native';

const PFlatList = props => {
  const {style, data, renderItem, horizontal} = props;

  return (
    <FlatList
      keyExtractor={item => item.id}
      renderItem={renderItem}
      data={data}
      numColumns={3} // set number of columns
      //columnWrapperStyle={style.row}  // space them out evenly
      //{...(horizontal === true ? horizontal : null)}
      vertical
      contentContainerStyle={{
        flexDirection: 'column',
      }}
    />
  );
};

export default PFlatList;
