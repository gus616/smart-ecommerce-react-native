import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import AppSafeView from '../../components/views/AppSafeView'
import HomeHeader from '../../components/headers/HomeHeader'
import AppText from '../../components/texts/AppText'
import EmptyCart from './EmptyCart'
import CartItem from './CartItem'

import { products } from '../../data/products';
import TotalsView from '../../components/cards/TotalsView'

const CartScreen = () => {
  return (
    <AppSafeView>
      <HomeHeader />
      {/* <EmptyCart /> */}
      <CartItem
        quantity={1}
        product={products[0]}
        onDeletePress={() => console.log('Delete pressed')}
        onDecreasePress={() => console.log('Decrease pressed')}
        onIncreasePress={() => console.log('Increase pressed')}
      />

      <TotalsView 
        itemsPrice={products[0].price * 1} // Assuming quantity is 1 for this example
        taxes={0.15 * (products[0].price * 1)} // Example tax calculation
        shippingFee={5.00} // Example shipping fee
      />
    </AppSafeView>
  )
}

export default CartScreen;

