import React from 'react';
import { Text , FlatList } from 'react-native';

const PFlatList = props => {
    const {
        style,
        data,
        renderItem,
        horizontal,
    } = props;
    
    return (
        <FlatList 
            keyExtractor={item => item.id}
            renderItem={renderItem}
            data={data}
            {...horizontal === true ? horizontal : null}
            horizontal
            contentContainerStyle={{
                flexDirection: 'column',
                flexWrap: 'wrap'
            }}
        />
    );
};

export default PFlatList;