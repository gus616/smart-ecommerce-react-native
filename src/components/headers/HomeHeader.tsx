import { View, Text, StyleSheet , Image} from 'react-native'
import React from 'react'
import { s, vs } from 'react-native-size-matters';
import { AppColors } from '../../styles/colors';
import { IMAGES } from '../../constants/images-paths';

const HomeHeader = () => {
  return (
    <View style={styles.container}>
        <Image source={IMAGES.appLogo} style={styles.logo} />    
    </View>
  )
}

export default HomeHeader;

const styles = StyleSheet.create({
    container: {
        backgroundColor: AppColors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: vs(10),
    },
    logo: {
        height: vs(50),
        width: s(60),
        tintColor: AppColors.white,
    }
});