import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import AppSafeView from '../../components/views/AppSafeView'
import HomeHeader from '../../components/headers/HomeHeader'
import AppText from '../../components/texts/AppText'
import EmptyCart from './EmptyCart'

const CartScreen = () => {
  return (
    <AppSafeView>
      <HomeHeader />
      <EmptyCart />
    </AppSafeView>
  )
}

export default CartScreen;

