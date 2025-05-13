import { Text } from 'react-native'
import React  from 'react'
import AppSafeView from '../../components/views/AppSafeView'
import HomeHeader from '../../components/headers/HomeHeader'

const HomeScreen = () => {
  return (
    <AppSafeView>
      <HomeHeader />
      <Text>Home Screen</Text>
    </AppSafeView>
  )
}

export default HomeScreen