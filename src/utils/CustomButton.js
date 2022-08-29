import React from 'react';
import {
    Pressable,
    Text,
    StyleSheet,
} from 'react-native';
import Metrics from '../component/Metrics';
import {FontFamilies} from '../component/Fonts';

const CustomButton = (props) => {
    return (
        <Pressable
            onPress={props.onPressFunction}
            hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}
            android_ripple={{ color: '#00000050' }}
            style={({ pressed }) => [
                { backgroundColor: pressed ? '#dddddd' : props.color },
                styles.button,
                { ...props.style }
            ]}
        >
            <Text style={styles.text}>
                {props.title}
            </Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    text: {
        color: '#ffffff',
        fontSize: Metrics.measure(14),
        margin: Metrics.measure(10),
        textAlign: 'center',
        fontFamily: FontFamilies.meium,
    },
    button: {
        width: Metrics.measure(300),
        height: Metrics.measure(40),
        alignItems: 'center',
        borderRadius: Metrics.measure(10),
        margin: Metrics.measure(10),
    },
})

export default CustomButton;