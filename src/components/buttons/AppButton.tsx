import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { FC } from 'react'
import { vs, s } from 'react-native-size-matters'
import AppText from '../texts/AppText'
import { AppColors } from '../../styles/colors'
interface AppButtonProps {
    onPress: () => void,
    title?: string,
    disabled?: boolean,
    loading?: boolean,
    variant?: 'primary' | 'secondary' | 'tertiary',
    style?: object,
    textStyle?: object,
    backgroundColor?: string,
    textColor?: string,
    styleTitle?: object
}
const AppButton: FC<AppButtonProps> = ({ onPress, title, backgroundColor = AppColors.primary, textColor = AppColors.white }, disabled = false) => {
    return (
        <TouchableOpacity onPress={onPress}
            activeOpacity={0.8}
            style={
                [
                    styles.button,
                    { backgroundColor: disabled ? AppColors.disabledGray : backgroundColor },
                ]
            }


        >

            <AppText style={[styles.textTitle, { color: textColor }]}
                variant="bold"
            >{title}</AppText>

        </TouchableOpacity>
    )
}

export default AppButton;

const styles = StyleSheet.create({
    button: {
        width: '100%',
        height: vs(40),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: s(8),
        alignSelf: 'center',
    },
    textTitle: {
        fontSize: s(16),
        color: 'white',
        textAlign: 'center',
    }
})