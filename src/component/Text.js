import React from 'react';
import { Text } from 'react-native';

const PText = props => {
    const {
        style,
        value,
    } = props;
    
    return (
        <Text style={style}>{value}</Text>
    );
};

export default PText;