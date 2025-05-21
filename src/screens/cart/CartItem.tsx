import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { FC, useState } from 'react'
import { Product } from '../../types/types'
import { s, vs } from 'react-native-size-matters';
import AppText from '../../components/texts/AppText';
import { AppColors } from '../../styles/colors';
import { AppFonts } from '../../styles/fonts';
import { AntDesign, FontAwesome } from '@expo/vector-icons';

interface CartItemProps {
    product: Product
};

const CartItem: FC<CartItemProps> = ({ product }) => {
    const [quantity, setQuantity] = useState(1);
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

                <View style={styles.quantityContainer}>
                    <Pressable style={styles.iconButton} onPress={() => { setQuantity(quantity - 1); setDeleteButtonPressed(false) }}>
                        <FontAwesome name='minus' size={s(10)} color={AppColors.primary} />
                    </Pressable>
                    <AppText style={styles.textQuantity}>{quantity}</AppText>
                    <Pressable style={styles.iconButton} onPress={() => { setQuantity(quantity + 1); setDeleteButtonPressed(false) }}>
                        <FontAwesome name='plus' size={s(10)} color={AppColors.primary} />
                    </Pressable>
                </View>
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
    quantityContainer: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: s(5),
        borderRadius: s(30),
        borderWidth: s(1),
        borderColor: AppColors.blueGray,
        width: s(80),
        paddingVertical: vs(5),
    },
    iconButton: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: AppColors.lightGray,
        padding: s(5),
        height: s(20),
        width: s(20),
        borderRadius: s(10),
    },
    textQuantity: {
        flex: 1,
        textAlign: 'center',
        color: AppColors.primary,
    }
})