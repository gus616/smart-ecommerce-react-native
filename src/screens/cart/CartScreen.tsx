import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import AppSafeView from '../../components/views/AppSafeView'
import HomeHeader from '../../components/headers/HomeHeader'
import AppText from '../../components/texts/AppText'
import EmptyCart from './EmptyCart'
import CartItem from './CartItem'

import { products } from '../../data/products';
import TotalsView from '../../components/cards/TotalsView'
import { FlatList } from 'react-native-gesture-handler'
import { sharedPaddingHorizontal } from '../../styles/sharedStyles'
import AppButton from '../../components/buttons/AppButton'

const CartScreen = () => {
  return (
    <AppSafeView>
      <HomeHeader />
      {/* <EmptyCart /> */}

      <View style={{ paddingHorizontal: sharedPaddingHorizontal, flex: 1 }}>
        <FlatList
          data={products}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <CartItem
              quantity={1} // Assuming quantity is 1 for this example
              product={item}
              onDeletePress={() => console.log('Delete pressed')}
              onDecreasePress={() => console.log('Decrease pressed')}
              onIncreasePress={() => console.log('Increase pressed')}
            />
          )}
          showsVerticalScrollIndicator={false}
        />

        <TotalsView
          itemsPrice={products[0].price * 1} // Assuming quantity is 1 for this example
          taxes={0.15 * (products[0].price * 1)} // Example tax calculation
          shippingFee={5.00} // Example shipping fee
        />
        <AppButton title='Checkout' onPress={() => console.log('Checkout pressed')} />
      </View>
    </AppSafeView>
  )
}

export default CartScreen;

