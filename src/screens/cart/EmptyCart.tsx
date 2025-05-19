import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { s, vs } from 'react-native-size-matters'
import AppText from '../../components/texts/AppText'
import { AppFonts } from '../../styles/fonts'
import { AppColors } from '../../styles/colors'
import AppButton from '../../components/buttons/AppButton'
import { useNavigation } from '@react-navigation/native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const EmptyCart = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <MaterialCommunityIcons name="shopping-outline" size={s(100)} color={AppColors.primary} style={styles.icon} />
            <AppText style={styles.title}>Your Cart is empty</AppText>
            <AppText style={styles.subtitle}>Browse your products</AppText>
            <AppButton
                title="Continue Shopping"
                onPress={() => { navigation.navigate('Home') }}
                style={styles.button}
            />
        </View>
    )
}

export default EmptyCart

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: s(20),
    },
    title: {
        fontSize: s(24),
        fontFamily: AppFonts.Medium,
        color: AppColors.primary,
        marginBottom: vs(10),
    },
    subtitle: {
        fontSize: s(16),
        fontFamily: AppFonts.Medium,
        color: AppColors.medGray,
        textAlign: 'center',
        marginBottom: vs(20),
    },
    button: {
        width: '80%',
    },
    icon: {
        marginBottom: vs(20),
        opacity: .1,
    }
})