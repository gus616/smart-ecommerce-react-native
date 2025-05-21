import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { FC, useState } from 'react'
import { Product } from '../../types/types'
import { s, vs } from 'react-native-size-matters';
import AppText from '../../components/texts/AppText';
import { AppColors } from '../../styles/colors';
import { AppFonts } from '../../styles/fonts';
import { AntDesign } from '@expo/vector-icons';

interface CartItemProps {
    product: Product;
};

const CartItem: FC<CartItemProps> = ({ product }) => {
    const [deleteButtonPressed, setDeleteButtonPressed] = useState(false);
    return (
        <View style={styles.container}>
            {/* image */}
            <View style={styles.imageContainer}>
                <Image
                    source={{ uri: product.imageURL }}
                    alt={product.title}
                    style={styles.image}
                    resizeMode='contain' />
            </View>
            {/* details */}
            <View style={styles.detailsContainer}>
                <AppText style={styles.textTitle}>{product.title}</AppText>
                <AppText style={styles.textPrice}>${product.price}</AppText>
            </View>
            {/* delete button container */}
            <View style={!deleteButtonPressed ? styles.deleteContainer : { ...styles.deleteContainer, backgroundColor: AppColors.lightGray }}>
                <Pressable
                    onPress={() => console.log('Delete pressed')}
                    onPressIn={() => setDeleteButtonPressed(true)}
                    onPressOut={() => setDeleteButtonPressed(false)}
                    android_ripple={{ color: AppColors.lightGray }}

                    style={styles.deleteButtonContainer}>
                    <AntDesign name='delete' size={s(14)} color={AppColors.red} />
                    <AppText style={styles.deleteText}>Delete</AppText>
                </Pressable>
            </View>

        </View>
    )
}

export default CartItem

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        borderBottomWidth: s(0.5),
        paddingBottom: vs(4),
        borderColor: AppColors.blueGray,
    },
    imageContainer: {
        flex: 1.5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        height: vs(80),
        width: s(80),
        borderRadius: s(5),
    },
    detailsContainer: {
        flex: 2.5,
    },
    deleteContainer: {
        flex: 1,
        justifyContent: 'center',
        paddingEnd: s(12),
    },
    textTitle: {
        fontSize: s(14),
        fontWeight: 'bold',
        color: AppColors.primary,
        fontFamily: AppFonts.Medium,
        marginTop: vs(5),
    },
    textPrice: {
        fontSize: s(16),
        color: AppColors.primary,
        fontFamily: AppFonts.Bold,
        marginVertical: vs(5),
    },
    deleteButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    deleteText: {
        fontSize: s(12),
        color: AppColors.primary,
        fontFamily: AppFonts.Medium,
        marginLeft: s(7),
        marginTop: vs(2),
    },
})