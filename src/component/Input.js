import React from 'react';
import { TextInput , View , Text } from 'react-native';
import InputFieldErrorMessage from './InputErrorMessage';

const PInput = props => {
    const {
        style,
        placeholder,
        placeholderTextColor,
        onChangeText,
        errorMessage,
        errorText,
        errorContainerStyle,
        onBlur,
        autoCapitalize,
        numberic,
        multiline,
    } = props;
    
    return (
        <View>
            <TextInput
                style={style}
                placeholder={placeholder}
                placeholderTextColor={placeholderTextColor}
                onChangeText={onChangeText}
                multiline={multiline}
                numberOfLines={4}
                {...numberic ? keyboardType="numeric" : null}
                onBlur={() => {
                    onBlur?.();
                }}
                autoCapitalize={autoCapitalize}
            />
            {errorMessage ? (
                <InputFieldErrorMessage
                    errorText={errorText}
                    errorContainerStyle={errorContainerStyle}
                >
                    {errorMessage}
                </InputFieldErrorMessage>
            ) : null}
        </View>
    );
};

export default PInput;