import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import AppSafeView from '../../components/views/AppSafeView'
import HomeHeader from '../../components/headers/HomeHeader'
import AppText from '../../components/texts/AppText'
import EmptyCart from './EmptyCart'
import CartItem from './CartItem'

import { products } from '../../data/products';

const CartScreen = () => {
  return (
    <AppSafeView>
      <HomeHeader />
      {/* <EmptyCart /> */}
      <CartItem product={products[0]} />
    </AppSafeView>
  )
}

export default CartScreen;

