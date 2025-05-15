import { Text } from 'react-native'
import React from 'react'
import AppSafeView from '../../components/views/AppSafeView'
import HomeHeader from '../../components/headers/HomeHeader'
import AppText from '../../components/texts/AppText'
import { products } from '../../data/products'
import ProductCard from '../../components/cards/ProductCard'
import { ScrollView } from 'react-native-gesture-handler'

const HomeScreen = () => {
  return (
    <AppSafeView>
      <HomeHeader />
      <AppText style={{ fontSize: 60 }}>Home Screen</AppText>
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        {products.map((product) => (
          <ProductCard product={product} key={product.id}
          />
        ))}
      </ScrollView>

    </AppSafeView>
  )
}

export default HomeScreen