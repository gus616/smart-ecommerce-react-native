import { View, Text } from 'react-native'
import React from 'react'
import AppSafeView from '../../components/views/AppSafeView'
import HomeHeader from '../../components/headers/HomeHeader'
import AppText from '../../components/texts/AppText'
import ProfileSectionButton from '../../components/buttons/ProfileSectionButton'
import { sharedPaddingHorizontal } from '../../styles/sharedStyles'
import { s, vs } from 'react-native-size-matters'

const ProfileScreen = () => {
  return (
    <AppSafeView>
      <HomeHeader />
      <View style={{ paddingHorizontal: sharedPaddingHorizontal }}>
        <AppText style={{ fontSize: s(18), marginTop: vs(10) }}>Hello, Gus</AppText>
        <ProfileSectionButton
          onPress={() => console.log('Edit Profile Pressed')}
          title="My Orders"
        />
        <ProfileSectionButton
          onPress={() => console.log('Edit Profile Pressed')}
          title="Language"
        />
        <ProfileSectionButton
          onPress={() => console.log('Edit Profile Pressed')}
          title="Logout"
        />
      </View>
    </AppSafeView>
  )
}

export default ProfileScreen