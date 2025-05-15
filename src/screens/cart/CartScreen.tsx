import { View, Text } from 'react-native'
import React from 'react'
import AppSafeView from '../../components/views/AppSafeView'
import HomeHeader from '../../components/headers/HomeHeader'
import AppText from '../../components/texts/AppText'

const CartScreen = () => {
  return (
    <AppSafeView>/Text
      <HomeHeader />
      <AppText style={{fontSize: 60}}>Cart Screen</AppText>
    </AppSafeView>
  )
}

export default CartScreen