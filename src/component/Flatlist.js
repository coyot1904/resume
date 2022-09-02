import React from 'react';
import {FlatList, Dimensions, Text} from 'react-native';

// maybe it works
const {width} = Dimensions.get('window');
const itemWidth = width / 3;

// handle empty list, fix potential bug
const handleEmpty = () => {
  return <Text style={styles.title}> No data present!</Text>;
};

const PFlatList = props => {
  const {data, renderItem, horizontal} = props;

  return (
    <FlatList
      style={{width: '90%', alignSelf: 'center'}}
      keyExtractor={item => item.id}
      renderItem={renderItem}
      data={data}
      numColumns={Math.ceil(data.length / 2)}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      vertical
      contentContainerStyle={{
        flexDirection: 'column',
        flexWrap: 'wrap',
      }}
      ListEmptyComponent={handleEmpty}
    />
  );
};

export default PFlatList;
