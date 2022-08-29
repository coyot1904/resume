import { StyleSheet } from 'react-native';

import Metrics from '../../component/Metrics';
import {FontFamilies} from '../../component/Fonts';

export default StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    logo: {
        width: Metrics.measure(120),
        height: Metrics.measure(120),
        marginTop: Metrics.measure(144),
        resizeMode: "contain",
    },
    text: {
        fontSize: Metrics.measure(16),
        color: '#000',
        marginBottom: Metrics.measure(20),
        marginTop: Metrics.measure(10),
        fontFamily: FontFamilies.medium,
    },
    input: {
        width: Metrics.measure(300),
        borderWidth: 0,
        borderColor: '#555',
        borderRadius: 10,
        backgroundColor: '#F8F8FF',
        textAlign: 'center',
        fontSize: Metrics.measure(12),
        fontFamily: FontFamilies.medium,
        marginBottom: 10,
        padding : Metrics.measure(10),
        color : '#000',
    },
    btn : {
        position : 'absolute',
        bottom : Metrics.measure(30),
    }
});