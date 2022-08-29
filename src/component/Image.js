import React from 'react';
import { Image } from 'react-native';

const PImage = props => {
    const {
        style,
        source,
    } = props;
    
    return (
        <Image
            style={style}
            source={source}
        />
    );
};

export default PImage;