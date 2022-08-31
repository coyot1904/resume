import React from 'react';
import { Text , FlatList } from 'react-native';

const PFlatList = props => {
    const {
        style,
        data,
        renderItem,
    } = props;
    
    return (
        <FlatList 
            keyExtractor={item => item.id}
            renderItem={renderItem}
            data={data}
        />
    );
};

export default PFlatList;