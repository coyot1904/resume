import React from 'react';
import {
    View,
    Text,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { setEmail, setName, setPhone } from '../../redux/actions';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// Component
import CustomButton from '../../utils/CustomButton';
import PImage from '../../component/Image'; 
import PInput from '../../component/Input';

// styles
import styles from './styles';
import { images } from '../../utils/Images';


export default function Login({ navigation }) {

    const dispatch = useDispatch();

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

    const schema = yup
    .object()
    .shape({
        name: yup.string().required('Please Enter Your Name'),
        phone: yup.string().matches(phoneRegExp, 'Phone number is not valid'),
        email: yup.string().email('Please Enter Valid Email').required('Please Enter Your Email'),
    })
    .required();

    const { control , handleSubmit , formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onBlur',
        reValidateMode: 'onChange',
    });

    const setData = async (data) => {
        dispatch(setName(data.name));
        dispatch(setPhone(data.phone));
        dispatch(setEmail(data.email));
        navigation.navigate('Home');
    }

    return (
        <View style={styles.body} >
            <PImage
                style={styles.logo}
                source={images.images.logo}
            />
            <Text style={styles.text}>Create a Resume on Basic Data</Text>
            <Controller
                control={control}
                name="name"
                render={({ field: { onChange, onBlur } }) => (
                    <PInput
                        style={styles.input}
                        placeholder='Enter your Name'
                        placeholderTextColor="#696969"
                        onChangeText={onChange}
                        autoCapitalize={'words'}
                        onBlur={onBlur}
                        errorMessage={errors.name?.message}
                    />
                )}
            />
            <Controller
                control={control}
                name="phone"
                render={({ field: { onChange, onBlur } }) => (
                    <PInput
                        style={styles.input}
                        placeholder='Enter your phone number'
                        placeholderTextColor="#696969"
                        onChangeText={onChange}
                        onBlur={onBlur}
                        numberic={'ture'}
                        errorMessage={errors.phone?.message}
                    />
                )}
            />
            <Controller
                control={control}
                name="email"
                render={({ field: { onChange, onBlur } }) => (
                    <PInput
                        style={styles.input}
                        placeholder='Enter your Email'
                        placeholderTextColor="#696969"
                        onChangeText={onChange}
                        autoCapitalize={'words'}
                        onBlur={onBlur}
                        errorMessage={errors.email?.message}
                    />
                )}
            />
            <CustomButton
                title='Start Process'
                color='#00BFFF'
                onPressFunction={handleSubmit(setData)}
                style={styles.btn}
            />
        </View>
    )
}
