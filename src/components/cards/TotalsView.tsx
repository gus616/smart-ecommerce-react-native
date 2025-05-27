import { StyleSheet, Text, View } from 'react-native';
import React, { FC } from 'react';
import { s, vs } from 'react-native-size-matters';
import AppText from '../texts/AppText';
import { AppColors } from '../../styles/colors';
import { formatCurrency } from '../../helpers/utils';

interface TotalsViewProps {
    itemsPrice?: number;
    taxes?: number;
    shippingFee?: number;
}

const TotalsView: FC<TotalsViewProps> = ({ itemsPrice = 0, taxes = 0, shippingFee = 0 }) => {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <AppText style={styles.textTitle}>Items Price:</AppText>
                <AppText style={styles.textPrice}>{formatCurrency(itemsPrice)}</AppText>
            </View>
            <View style={styles.row}>
                <AppText style={styles.textTitle}>Taxes:</AppText>
                <AppText style={styles.textPrice}>{formatCurrency(taxes)}</AppText>
            </View>
            <View style={styles.row}>
                <AppText style={styles.textTitle}>Shipping Fee:</AppText>
                <AppText style={styles.textPrice}>{formatCurrency(shippingFee)}</AppText>
            </View>
            <View style={styles.separator} >
                <AppText style={styles.textTitle}>Order Total:</AppText>
                <AppText style={styles.textPrice}>{formatCurrency(itemsPrice + taxes + shippingFee)}</AppText>
            </View>
        </View >
    )
}

export default TotalsView

const styles = StyleSheet.create({
    container: {
        padding: vs(10),
        backgroundColor: AppColors.white,
        borderRadius: s(10),
        shadowColor: AppColors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: vs(10),
    },
    textTitle: {
        fontSize: vs(16),
        flex: 1,
    },
    textPrice: {
        fontSize: s(16),
        color: AppColors.primary,
    },
    separator: {
        height: 1,
        width: '100%',
        backgroundColor: AppColors.blueGray,
        marginVertical: vs(5),
    }
})