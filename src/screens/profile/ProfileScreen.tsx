import { View, Text } from 'react-native'
import React from 'react'
import AppSafeView from '../../components/views/AppSafeView'
import HomeHeader from '../../components/headers/HomeHeader'
import AppText from '../../components/texts/AppText'

const ProfileScreen = () => {
  return (
    <AppSafeView>
      <HomeHeader />
      <AppText style={{fontSize: 60}}>Profile Screen</AppText>
    </AppSafeView>
  )
}

export default ProfileScreen