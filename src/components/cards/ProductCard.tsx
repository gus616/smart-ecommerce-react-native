import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { FC } from 'react'
import { s, vs } from 'react-native-size-matters'
import { AppColors } from '../../styles/colors'
import { Product } from '../../types/types'
import AppText from '../texts/AppText'
import { AppFonts } from '../../styles/fonts'
import { Ionicons } from '@expo/vector-icons'
import { commonStyles } from '../../styles/sharedStyles'

interface ProductCardProps {
    product: Product,
    onPress?: () => void,   
}

const ProductCard: FC<ProductCardProps> = ({ product, onPress }) => {
    return (
        <View style={styles.container}>

            <TouchableOpacity style={styles.addToCartButton} onPress={onPress}>
                <Ionicons name="cart" size={s(15)} color={AppColors.white} />
            </TouchableOpacity>

            <View style={styles.imageContainer}>
                <Image source={{ uri: product.imageURL }} style={styles.image} />
            </View>

            <View style={styles.detailsContainer}>
                <AppText style={styles.titleText}>{product.title}</AppText>
                <Text style={styles.priceText}>${product.price}</Text>
            </View>
        </View>
    )
}

export default ProductCard

const styles = StyleSheet.create({
    container: {
        width: s(160),
        height: vs(190),
        backgroundColor: AppColors.white,
        borderRadius: s(10),
        marginTop: vs(10),
        marginBottom: vs(10),
        ...commonStyles.shadow,
    },

    imageContainer: {
        overflow: 'hidden',
        borderTopLeftRadius: s(10),
        borderTopRightRadius: s(10),
        height: vs(130),
        width: "100%",
    },
    image: {
        width: "100%",
        height: "100%",
        resizeMode: 'contain',
    },
    detailsContainer: {
        flex: 1,
        paddingTop: 8,
        paddingBottom: vs(15),
        paddingHorizontal: s(10),
    },
    titleText: {
        fontSize: s(14),
        fontFamily: AppFonts.Medium,
        color: AppColors.primary,
    },
    priceText: {
        fontSize: s(14),
        fontFamily: AppFonts.Bold,
        color: AppColors.primary,
        marginTop: vs(7),
        marginBottom: vs(7),
    },
    addToCartButton: {
        height: vs(28),
        width: s(28),
        position: 'absolute',
        left: s(5),
        top: s(5),
        borderRadius: s(14),
        backgroundColor: AppColors.primary,
        zIndex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
    }
})