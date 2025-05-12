import { View, Text, TextInput } from 'react-native'
import React, { FC } from 'react'
import { s, vs } from 'react-native-size-matters'
import { AppColors } from '../../styles/colors'


interface AppTextInputProps {
    value: string,
    onChangeText: (text: string) => void,
    placeholder?: string,
    secureTextEntry?: boolean,
    keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad' | 'decimal-pad' | 'visible-password',
    style?: object,
}

const AppTextInput: FC<AppTextInputProps> = ({ value, onChangeText, placeholder, secureTextEntry, keyboardType, style }) => {
    return (
        <TextInput
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
            keyboardType={keyboardType}
            style={[styles.input, style]}

        />
    )
}

export default AppTextInput

const styles = {
    input: {
        height: vs(45),
        borderRadius: s(25),
        borderWidth: 1,
        borderColor: AppColors.borderColor,
        paddingHorizontal: s(15),
        fontSize: s(16),
        backgroundColor: AppColors.white,
        width: '100%',
        marginBottom: vs(10),
    }
}