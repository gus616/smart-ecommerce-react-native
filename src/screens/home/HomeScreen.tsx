import { View, StyleSheet } from 'react-native'
import React from 'react'
import AppSafeView from '../../components/views/AppSafeView'
import HomeHeader from '../../components/headers/HomeHeader'
import { products } from '../../data/products'
import ProductCard from '../../components/cards/ProductCard'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import { s, vs } from 'react-native-size-matters'
const HomeScreen = () => {


  const handleProductPress = (productId: number) => {
    console.log(`Product with ID ${productId} pressed`);
  };

  return (
    <AppSafeView>
      <HomeHeader />
     
        <FlatList

          data={products}
          numColumns={2}
          renderItem={({ item }) => (
            <ProductCard product={item} onPress={() => handleProductPress(item.id)} />
          )}
          keyExtractor={(item) => item.id.toString()}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.productCardList}
          columnWrapperStyle={{ justifyContent: 'space-between', marginBottom: vs(10) }}
        />
    </AppSafeView>

  )
}

export default HomeScreen

const styles = StyleSheet.create({
  productCardList: {
    justifyContent: 'space-between',
    padding: s(10),
    marginTop: vs(10),
  }
});