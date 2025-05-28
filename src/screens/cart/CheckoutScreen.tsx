import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppSafeView from '../../components/views/AppSafeView';
import { commonStyles, sharedPaddingHorizontal } from '../../styles/sharedStyles';
import { s, vs } from 'react-native-size-matters';
import { AppColors } from '../../styles/colors';
import AppTextInput from '../../components/inputs/AppTextInput';
import AppButton from '../../components/buttons/AppButton';
import { IS_ANDROID, IS_IOS } from '../../constants/constants';

const CheckoutScreen = () => {
    console.log("CheckoutScreen rendered");
    return (
        <AppSafeView>           
            <View style={{ paddingHorizontal: s(16), marginTop: s(16) }}>
                <View style={styles.inputsContainer} >
                    <AppTextInput placeholder='Full Name' />
                    <AppTextInput placeholder='Phone number' />
                    <AppTextInput placeholder='Address' />
                </View>
            </View>

            <View style={styles.buttonContainer}>
                <AppButton title="Place Order" onPress={() => console.log("Order placed")} />
            </View>
        </AppSafeView>
    )
}

export default CheckoutScreen

const styles = StyleSheet.create({
    inputsContainer: {
        ...commonStyles.shadow,
        padding: s(8),
        borderRadius: s(8),
        backgroundColor: AppColors.white,
        marginTop: IS_IOS ? vs(15): undefined,
    },
    buttonContainer: {
        paddingHorizontal: sharedPaddingHorizontal,
        position: 'absolute',
        width: '100%',
        bottom: IS_ANDROID ? vs(50): 0,
        borderTopWidth: 1,
        borderColor: AppColors.lightGray,
        paddingTop: vs(10),
    }
})