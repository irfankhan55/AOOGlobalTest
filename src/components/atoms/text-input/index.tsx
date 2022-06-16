import * as React from 'react';
import { TextInput } from 'react-native';
import styles from './styles';

type TextFieldProps = {
    style?: {};
    value: string;
    onChangeText: (text: string) => void;
    placeholder: string;
    editable?: boolean;
    returnKeyType?: any
};

const TextField = ({
    style,
    value,
    onChangeText,
    placeholder,
    editable,
    returnKeyType,
    ...rest
}:TextFieldProps) => {

    return (
        <TextInput
            value={value}
            style={[styles.testInputStyle, style]}
            onChangeText={(text) => onChangeText(text)}
            placeholder={placeholder}
            editable={editable}
            returnKeyType={returnKeyType ? returnKeyType :"default"}
        />
    )
}

export  { TextField } ;