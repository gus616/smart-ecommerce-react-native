import { View, SafeAreaView, Platform, StatusBar, ViewStyle, StyleSheet} from 'react-native'
import React, {FC} from 'react'
import { AppColors } from '../../styles/colors';
import { IS_ANDROID } from '../../constants/constants';

interface AppSafeViewProps {
  children: React.ReactNode,
  style?: ViewStyle | ViewStyle[]
}

const AppSafeView: FC<AppSafeViewProps> = ({children, style}) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={[styles.container, style]}>{children}</View>
    </SafeAreaView>
  )
}

export default AppSafeView;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: AppColors.white,
    paddingTop: IS_ANDROID ? StatusBar.currentHeight || 0 : 0,
  },
    container: {
        flex: 1
    },
});